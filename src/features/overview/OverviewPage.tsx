import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { OverviewContainerProps, } from '../../types';
import useFetchMediaItem from '../../hooks/fetch/useFetchMediaDetails';
import OverviewContainer from './OverviewContainer';
import useFetchMediaCredits from '../../hooks/fetch/useFetchMediaCredits';
import mergedStatusResult from '../../utils/mergedStatusResult';
import getOverviewContainerProps from '../../utils/getOverviewContainerProps';
import isCategoryFilter from '../../utils/isCategoryFilter';
import { useOverviewDataStore } from '../../zustand-stores/useOverviewDataStore';
import StatusText from '@/components/ui/statusText';

const OverviewPage = () => {
  const { type, id } = useParams();
  if (type === undefined || !isCategoryFilter(type)) {
    return (
      <div className='pt-13 flex items-center flex-col'>
        <StatusText variant='errorText'>Unrecognized URL!</StatusText>
      </div>
    );
  }
  const { data: mediaData, status: mediaStatus } = useFetchMediaItem(type, id);
  const { data: creditsData, status: creditsStatus } = useFetchMediaCredits(type, id);
  const status = mergedStatusResult([mediaStatus, creditsStatus]);
  // Show loading if either is loading
  if (status.state === 'Loading') {
    return (
      <div className='pt-13 flex items-center flex-col'>
        <StatusText variant='loadingText'>Loading...</StatusText>
      </div>
    );
  }

  // Show error if either fails
  if (status.state === 'Error') {
    return (
      <div className='pt-13 flex items-center flex-col'>
       <StatusText variant='errorText'>{status.message}</StatusText>
      </div>
    );
  }

  // If both succeed
  if (status.state === 'Success') {
    if (!(mediaData || creditsData)) {
      return (
        <div className='pt-13 flex items-center flex-col'>
          <StatusText variant='errorText'>Unable To Load Data!</StatusText>
        </div>
      );
    }
    //console.log("DETAILS:", mediaData);
    const castNames: string[] = creditsData?.cast?.slice(0, 5).map((actor: any) => actor.name) || [];
    let props: OverviewContainerProps = getOverviewContainerProps(type!, mediaData!, castNames!);
    useOverviewDataStore.setState({
      value: props
    });
    return (
      <div className='pt-9 flex items-center flex-col gap-5 relative'>
        <OverviewContainer />
      </div>
    );
  }
};


export default OverviewPage