import React from 'react'
import MediaContainer from './MediaContainer'
import useTVShowsData from '../Hooks/useTVShowsData'
import type { TMDBItem } from '../types'

const TVShowContainer = () => {
    return (
        <MediaContainer
            hook={useTVShowsData}
            getDisplayData={(item:TMDBItem) => ({
                imgSrc: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                rating: item.vote_average.toFixed(1),
                year: item.release_date?.split('-')[0] ?? 'N/A',
                name: item.title ?? 'Untitled',
            })}
        />
    )
}

export default TVShowContainer