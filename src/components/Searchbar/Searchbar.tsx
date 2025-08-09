import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useSetSearchAndRedirect from '../../hooks/useSetSearchAndRedirect';
import SuggestionsContainer from './suggestions/SuggestionsContainer';
const Searchbar = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selected, setSelected] = useState<boolean>(false);
  const setSearchAndRedirect = useSetSearchAndRedirect();
  const handleSearch = () => {
    //console.log("HANDLE SEARCH CALLED");
    if (inputValue.trim() !== '') {
      setSearchAndRedirect(inputValue);
      setInputValue('');
      //console.log("SEARCHED!");
    }
  }

  return (
    <div className='flex justify-center items-center gap-1 bg-gray-900 h-10 min-w-52 max-w-4xl w-full'>
      <div className='h-full bg-gray-800 flex items-center justify-center w-10 hover:cursor-pointer' onClick={handleSearch}>
        <FaSearch className='text-purple-700 text-2xl' />
      </div>
      <div className='h-full text-center flex-1 relative'>
        <input className='h-full text-center flex-1 w-full' placeholder='Search' value={inputValue} onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { handleSearch() } }} onFocus={()=>setSelected(true)} onBlur={()=>setTimeout(()=>setSelected(false),150)}></input>
        {selected && <SuggestionsContainer
          inputValue={inputValue} />}
      </div>

    </div>

  )
}

export default Searchbar