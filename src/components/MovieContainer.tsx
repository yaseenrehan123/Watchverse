import React from 'react'
import type { TMDBItem, useTMDBDataResult } from '../types'
import useMoviesData from '../Hooks/useMoviesData'
import MediaLoadingText from './utils/MediaLoadingText';
import MediaErrorText from './utils/MediaErrorText';
import ShowCard from './ShowCard';
import MediaContainer from './MediaContainer';

const MovieContainer = () => {
  return (
    <MediaContainer
    hook={useMoviesData}
    getDisplayData={(movie)=>({
        imgSrc: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average.toFixed(1),
        year: movie.release_date?.split('-')[0] ?? 'N/A',
        name: movie.title ?? 'Untitled',
    })}
    />
  )
}

export default MovieContainer