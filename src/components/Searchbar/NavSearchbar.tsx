import React, { useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import { useSearchContext } from '../../contexts/SearchContext';
const NavSearchbar = () => {
  const { searchValue, setSearchValue, setSearchAndNavigate } = useSearchContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      setSearchAndNavigate(searchValue, '/home');
    }
  };

  return (
    <div className='flex justify-center items-center gap-1 bg-gray-900 h-10 w-full'>
      <div className='h-full bg-gray-800 flex items-center justify-center w-10 hover:cursor-pointer' onClick={handleSearch}>
        <FaSearch className='text-purple-700 text-2xl' />
      </div>
      <input className='h-full text-center w-full' placeholder='Search' value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }}
        onKeyDown={(e) => { if (e.key === 'Enter') handleSearch() }} ref={inputRef}></input>
    </div>

  )
}

export default NavSearchbar