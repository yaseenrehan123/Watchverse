/*
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useSearchContext } from '../../contexts/SearchContext';
import type { RedirectingSearchbarProps } from '../../types';
const RedirectingSearchbar = ({ path }: RedirectingSearchbarProps) => {
  const { searchValue, setSearchValue, setSearchAndNavigate } = useSearchContext();

  const handleSearch = () => {
        if (searchValue.trim() !== '') {
            setSearchAndNavigate(searchValue, path);
        }
    };

  return (
    <div className='flex justify-center items-center gap-1 bg-gray-900 h-10 min-w-52 max-w-4xl w-full'>
      <div className='h-full bg-gray-800 flex items-center justify-center w-10 hover:cursor-pointer' onClick={handleSearch}>
        <FaSearch className='text-purple-700 text-2xl' />
      </div>
      <input className='h-full text-center flex-1' placeholder='Search' value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }}
        onKeyDown={(e) => { if (e.key === 'Enter')  handleSearch()  }}></input>
    </div>

  )
}

export default RedirectingSearchbar
*/