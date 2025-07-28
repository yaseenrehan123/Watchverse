import React, { useEffect } from 'react'
import MoviesHeader from './MoviesHeader';
import MoviesContent from './MoviesContent';

const MoviesPage = () => {

  return (
    <div className='flex items-center flex-col gap-5'>
      <MoviesHeader/>
      <MoviesContent/>
    </div>
  )
}

export default MoviesPage