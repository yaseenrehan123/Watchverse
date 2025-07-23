import React, { useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import { useSearchContext } from '../../contexts/SearchContext';
import { useDebouncedSearchContext } from '../../contexts/DebouncedSearchContext';
const Searchbar = () => {
  const { searchValue, setSearchValue } = useSearchContext();
  const { setDebouncedSearchValue } = useDebouncedSearchContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  function getInputRef(): HTMLInputElement {
    if (inputRef.current === null){
      throw new Error("INPUT REF NOT FOUND IN SEARCHBAR COMPONENT!");
    }
      
    return inputRef.current;
  }

  return (
    <div className='flex justify-center items-center gap-1 bg-gray-900 h-10 min-w-52 max-w-4xl w-full'>
      <div className='h-full bg-gray-800 flex items-center justify-center w-10 hover:cursor-pointer' onClick={() => setDebouncedSearchValue(getInputRef().value)}>
        <FaSearch className='text-purple-700 text-2xl' />
      </div>
      <input className='h-full text-center flex-1' placeholder='Search' value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }}
        onKeyDown={(e) => { if (e.key === 'Enter') { setDebouncedSearchValue(searchValue) } }} ref={inputRef}></input>
    </div>

  )
}

export default Searchbar