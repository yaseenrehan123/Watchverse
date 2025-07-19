import React, { useEffect } from 'react'
import useClearSearchOnLoad from '../../hooks/useClearSearchOnLoad'
import { useMediaTypeContext } from '../../contexts/MediaTypeContext';
import { useMediaFilterContext } from '../../contexts/MediaFilterContext';
import MoviesHeader from '../headers/MoviesHeader';
import MoviesContent from '../content/MoviesContent';

const MoviesPage = () => {
    useClearSearchOnLoad();
    const {setType} = useMediaTypeContext();
    const {setFilter} = useMediaFilterContext();
    useEffect(()=>{
        setType('MOVIE');
        setFilter('POPULAR')
    },[]);
  return (
    <div className='flex items-center flex-col gap-5'>
      <MoviesHeader/>
      <MoviesContent/>
    </div>
  )
}

export default MoviesPage