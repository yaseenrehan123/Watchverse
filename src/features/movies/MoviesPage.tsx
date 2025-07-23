import React, { useEffect } from 'react'
import useClearSearchOnLoad from '../../hooks/useClearSearchOnLoad'
import { useMediaTypeContext } from '../../contexts/MediaTypeContext';
import { useMediaFilterContext } from '../../contexts/MediaFilterContext';
import MoviesHeader from './MoviesHeader';
import MoviesContent from './MoviesContent';
import { useResetPaginationOnLoad } from '../../hooks/useResetPaginationOnLoad';
import useSetMediaTypeOnLoad from '../../hooks/useSetMediaTypeOnLoad';
import useSetMediaFilterOnLoad from '../../hooks/useSetMediaFilterOnLoad';

const MoviesPage = () => {
    useClearSearchOnLoad();
    useResetPaginationOnLoad();
    useSetMediaTypeOnLoad('MOVIE');
    useSetMediaFilterOnLoad('POPULAR');
  return (
    <div className='flex items-center flex-col gap-5'>
      <MoviesHeader/>
      <MoviesContent/>
    </div>
  )
}

export default MoviesPage