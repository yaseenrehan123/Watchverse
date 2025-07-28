import React, { useState } from 'react'
import ColumnDividerThin from '../utilComponents/ColumnDividerThin'
import FilterOptionsContainer from './FilterOptionsContainer'
import getGenreFilterOptions from '../../utils/getGenreFilterOptions'
import getYearFilterOptions from '../../utils/getYearFilterOptions'
import getCountriesOptions from '../../utils/getCountriesOptions'
import type { MediaFiltersContainerProps } from '../../types'

const MediaFiltersContainer = () => {
  const [menuEnabled, setMenuEnabled] = useState<boolean>(false);
  const genreOptions = getGenreFilterOptions();
  const yearOptions = getYearFilterOptions();
  const countriesOptions = getCountriesOptions();

  return (
    <div className='flex items-center justify-center gap-2'>
      <div className='hover:text-cyan-600 hover:scale-98 hover:cursor-pointer transition-all duration-150 font-bold
      text-5xl text-cyan-500' onClick={() => setMenuEnabled(true)}>Filters</div>
      {menuEnabled && <div className='bg-[rgb(18,18,18)] min-w-40 max-w-[700px] min-h-96 w-full z-30 fixed top-1/2 left-1/2 translate-[-50%]
    rounded-2xl shadow-2xl shadow-black flex flex-col gap-4.5 p-5 overflow-x-hidden overflow-y-auto max-h-[95vh]
    media-filters-container'>
        <div className='flex items-center text-4xl text-cyan-600 font-roboto font-bold'>
          <span>Filter</span>
        </div>
        <FilterOptionsContainer
          section='Type:'
          options={[
            { label: 'Movie', value: 'movie' },
            { label: 'Tv', value: 'tv' }
          ]}
          enabled={true}
          filterKey='category'
        />
        <FilterOptionsContainer
          section='Sort:'
          options={[
            { label: 'Popularity', value: 'popularity' },
            { label: 'Trending', value: 'trending' },
            { label: 'New', value: 'new' },
            { label: 'Top IMDB', value: 'top_imdb' },
          ]}
          enabled={true}
          filterKey='sort'
        />
        <FilterOptionsContainer
          section='Year:'
          options={[...yearOptions]}
          enabled={true}
          filterKey='year'
        />
        <FilterOptionsContainer
          section='Genres:'
          options={[...genreOptions]}
          enabled={true}
          multiple={true}
          filterKey='genre'
        />
        <FilterOptionsContainer
          section='Country:'
          options={[...countriesOptions]}
          enabled={true}
          filterKey='country'
        />
        <div className='flex items-center w-full pl-1.5'>
          <button className='text-center w-20 h-12 bg-neutral-800 rounded-[8px] text-white font-roboto font-bold
         hover:cursor-pointer hover:bg-neutral-700 transition-all duration-150 hover:scale-98'
            onClick={() => setMenuEnabled(false)}>
            Cancel
          </button>
        </div>
      </div>}
    </div>

  )
}

export default MediaFiltersContainer