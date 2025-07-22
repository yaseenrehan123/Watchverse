import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Status, OverviewContainerProps, TMDBMovieDetails, TMDBTVDetails, TMDBFetchType } from '../../types';
import useFetchMediaItem from '../../hooks/useFetchMediaDetails';
import MediaLoadingText from '../utilComponents/MediaLoadingText';
import MediaErrorText from '../utilComponents/MediaErrorText';
import OverviewContainer from '../one-time/OverviewContainer';
import useFetchMediaCredits from '../../hooks/useFetchMediaCredits';
import { parseTMDBType } from '../../utils/parseTMDBType';
import mergedStatusResult from '../../utils/mergedStatusResult';
import getOverviewContainerProps from '../../utils/getOverviewContainerProps';
import { OverviewDataContextProvider } from '../../contexts/OverviewDataContext';

const OverviewPage = () => {
  const { type, id } = useParams();
  const parsedType = parseTMDBType(type);
  if (parsedType === null) {
    return (
      <div className='pt-13 flex items-center flex-col'>
        <MediaErrorText content={'Unrecognized Url!'} />
      </div>
    );
  }
  const { data: mediaData, status: mediaStatus } = useFetchMediaItem(parsedType, id);
  const { data: creditsData, status: creditsStatus } = useFetchMediaCredits(parsedType, id);
  const status = mergedStatusResult([mediaStatus, creditsStatus]);
  // Show loading if either is loading
  if (status.state === 'Loading') {
    return (
      <div className='pt-13 flex items-center flex-col'>
        <MediaLoadingText content='Loading...' />
      </div>
    );
  }

  // Show error if either fails
  if (status.state === 'Error') {
    return (
      <div className='pt-13 flex items-center flex-col'>
        <MediaErrorText content={status.message} />
      </div>
    );
  }

  // If both succeed
  if (status.state === 'Success') {
    if (!(mediaData || creditsData)) {
      return (
        <div className='pt-13 flex items-center flex-col'>
          <MediaErrorText content={'Unable To Load Data! Unknown Error'} />
        </div>
      );
    }
    console.log("DETAILS:", mediaData);
    const castNames:string[] = creditsData?.cast?.slice(0, 5).map((actor: any) => actor.name) || [];
    let props: OverviewContainerProps = getOverviewContainerProps(parsedType!,mediaData!,castNames!);

    return (
      <div className='pt-9 flex items-center flex-col gap-5 relative'>
        <OverviewDataContextProvider value={props}>
           <OverviewContainer/>
        </OverviewDataContextProvider>
       
      </div>
    );
  }
};


export default OverviewPage