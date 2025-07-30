import React, { useEffect } from 'react'
import MediaContainer from '../../components/media/MediaContainer'
import MediaFiltersContainer from '../../components/mediaFilters/MediaFiltersContainer'
import useMediaFilters from '../../hooks/useMediaFilters';
import type { FilterParams } from '../../types';

const TvShowContent = () => {
    const [filters,setFilters] = useMediaFilters();
    useEffect(()=>{
      const fixedFilters:Partial<FilterParams> = {
        category:'tv'
      };
      setFilters(fixedFilters);
    },[]);
  return (
    <div className='flex items-center flex-col gap-5'>
      <div className={`flex pl-10 sm:pl-24  gap-5 w-screen relative`}>
        <MediaFiltersContainer 
        enableCategoryFilter={false}/>
      </div>
      <MediaContainer />
    </div>
  )
}

export default TvShowContent