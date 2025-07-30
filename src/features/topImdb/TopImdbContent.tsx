import React, { useEffect } from 'react'
import MediaContainer from '../../components/media/MediaContainer'
import MediaFiltersContainer from '../../components/mediaFilters/MediaFiltersContainer'
import useMediaFilters from '../../hooks/useMediaFilters';
import type { FilterParams } from '../../types';

const TopImdbContent = () => {
    const [filters,setFilters] = useMediaFilters();
    useEffect(()=>{
      const fixedFilters:Partial<FilterParams> = {
        sort:'top_imdb'
      };
      setFilters(fixedFilters);
    },[]);
  return (
    <div className='flex items-center flex-col gap-5'>
      <div className={`flex pl-10 sm:pl-24  gap-5 w-screen relative`}>
        <MediaFiltersContainer 
        enableSortFilter={false}/>
      </div>
      <MediaContainer />
    </div>
  )
}

export default TopImdbContent