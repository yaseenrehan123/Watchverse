import React, { useState } from 'react'
import type { MediaFilterDropdownProps, TMDBFilterType } from '../../types'
import { TMDB_FILTERS } from '../../utils/filters';
import { useMediaFilterContext } from '../../contexts/MediaFilterContext';

const MediaFilterDropdown = () => {
  const {filter,setFilter} = useMediaFilterContext();
  const [open,setOpen] = useState<boolean>(false);
  const handleSelect =(value:TMDBFilterType) => {
    setFilter(value);
    setOpen(false);
  }
  return (
    <div className='w-46 min-h-12 bg-gray-950 flex items-center flex-col rounded-2xl outline-2 outline-black
    hover:cursor-pointer hover:bg-gray-900 transition-all duration-150 relative'>
      <button className='hover:cursor-pointer hover:text-cyan-500 font-roboto text-[20px] text-center w-full h-12'
      onClick={()=>setOpen(prev=> !prev)}>
        {filter.charAt(0) + filter.slice(1).toLowerCase()}
      </button>
      {open && (
        <div className="w-full bg-gray-800 rounded-xl shadow-lg z-10">
          {TMDB_FILTERS.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-white hover:bg-cyan-600 cursor-pointer transition-all rounded-xl"
              onClick={() => handleSelect(option)}
            >
              {option.charAt(0) + option.slice(1).toLowerCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MediaFilterDropdown