import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Status, OverviewContainerProps, TMDBMovieDetails, TMDBTVDetails } from '../../types';
import useFetchMediaItem from '../../hooks/useFetchMediaDetails';
import MediaLoadingText from '../utilComponents/MediaLoadingText';
import MediaErrorText from '../utilComponents/MediaErrorText';
import OverviewContainer from '../one-time/OverviewContainer';
import useFetchMediaCredits from '../../hooks/useFetchMediaCredits';

const OverviewPage = () => {
  const { type, id } = useParams();
  const { data: mediaData, status: mediaStatus } = useFetchMediaItem(type, id);
  const { data: creditsData, status: creditsStatus } = useFetchMediaCredits(type, id);
  console.log("MEDIA STATUS:", mediaStatus, "CREDITS STATUS: ", creditsStatus)
  // Show loading if either is loading
  if (mediaStatus.state === 'Loading' || creditsStatus.state === 'Loading') {
    return (
      <div className='pt-13 flex items-center flex-col'>
        <MediaLoadingText content='Loading...' />
      </div>
    );
  }

  // Show error if either fails
  if (mediaStatus.state === 'Error' || creditsStatus.state === 'Error') {
    return (
      <div className='pt-13 flex items-center flex-col'>
        <MediaErrorText content={
          mediaStatus.state === 'Error' ? mediaStatus.message
            : creditsStatus.state === 'Error' ? creditsStatus?.message
              : 'Error!'
        } />
      </div>
    );
  }

  // If both succeed
  if (mediaStatus.state === 'Success' && creditsStatus.state === 'Success' && mediaData && creditsData) {
    console.log("DETAILS:", mediaData);
    const castNames = creditsData?.cast?.slice(0, 5).map((actor: any) => actor.name) || [];
    let props: OverviewContainerProps;
    if (type === 'movie') {
      const movieData = mediaData as TMDBMovieDetails;
      props = {
        backdropImgSrc: `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`,
        posterImgSrc: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
        title: movieData.title,
        overview: movieData.overview,
        releaseDate: movieData.release_date,
        duration: `${movieData.runtime || "?"}min`,
        genre: movieData.genres?.map((g: any) => g.name) || [],
        casts: castNames,
        country: movieData.production_countries?.[0]?.name || "Unknown",
        production: movieData.production_companies?.map((p: any) => p.name) || []
      } as OverviewContainerProps;
    }
    else if (type === 'tv') {
      const tvShowData = mediaData as TMDBTVDetails;
      props = {
        backdropImgSrc: `https://image.tmdb.org/t/p/original${tvShowData.backdrop_path}`,
        posterImgSrc: `https://image.tmdb.org/t/p/w500${tvShowData.poster_path}`,
        title: tvShowData.name,
        overview: tvShowData.overview,
        releaseDate: tvShowData.first_air_date,
        duration: `${tvShowData.episode_run_time || "?"}min`,
        genre: tvShowData.genres?.map((g: any) => g.name) || [],
        casts: castNames,
        country: tvShowData.production_countries?.[0]?.name || "Unknown",
        production: tvShowData.production_companies?.map((p: any) => p.name) || []
      } as OverviewContainerProps;
    }
    else {
      props = {
        backdropImgSrc: '',
        posterImgSrc: '',
        title: 'Unknown Media',
        overview: '',
        releaseDate: '',
        duration: '',
        genre: [],
        casts: [],
        country: '',
        production: []
      };
    }


    return (
      <div className='pt-9 flex items-center flex-col gap-5 relative'>
        <OverviewContainer {...props} />
      </div>
    );
  }

  return null; // fallback
};


export default OverviewPage