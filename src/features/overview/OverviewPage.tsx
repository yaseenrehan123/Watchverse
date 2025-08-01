import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { OverviewContainerProps, } from '../../types';
import useFetchMediaItem from '../../hooks/useFetchMediaDetails';
import LoadingText from '../../components/utilComponents/LoadingText';
import ErrorText from '../../components/utilComponents/ErrorText';
import OverviewContainer from './OverviewContainer';
import useFetchMediaCredits from '../../hooks/useFetchMediaCredits';
import mergedStatusResult from '../../utils/mergedStatusResult';
import getOverviewContainerProps from '../../utils/getOverviewContainerProps';
import isCategoryFilter from '../../utils/isCategoryFilter';
import { useOverviewDataStore } from '../../zustand-stores/useOverviewDataStore';

const OverviewPage = () => {
  const { type, id } = useParams();
  if (type === undefined || !isCategoryFilter(type)) {
    return (
      <div className='pt-13 flex items-center flex-col'>
        <ErrorText content={'Unrecognized Url!'} />
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
        <LoadingText content='Loading...' />
      </div>
    );
  }

  // Show error if either fails
  if (status.state === 'Error') {
    return (
      <div className='pt-13 flex items-center flex-col'>
        <ErrorText content={status.message} />
      </div>
    );
  }

  // If both succeed
  if (status.state === 'Success') {
    if (!(mediaData || creditsData)) {
      return (
        <div className='pt-13 flex items-center flex-col'>
          <ErrorText content={'Unable To Load Data! Unknown Error'} />
        </div>
      );
    }
    console.log("DETAILS:", mediaData);
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