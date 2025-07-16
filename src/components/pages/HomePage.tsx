import React from 'react'
import { SearchContextProvider } from '../../Contexts/SearchContext'
import HomeHeader from '../HomeHeader'
import useMoviesData from '../../Hooks/useMoviesData'
import MovieContainer from '../MovieContainer'
import TVShowContainer from '../TVShowContainer'

const HomePage = () => {
    return (
        <div className='flex items-center flex-col gap-5'>
            <HomeHeader />
            <MovieContainer/>
            <TVShowContainer/>
        </div>
    )
}

export default HomePage