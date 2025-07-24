import React, { useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useSearchContext } from '../../contexts/SearchContext';
const Searchbar = () => {
  const { setSearchAndRedirect } = useSearchContext();
  const [inputValue,setInputValue] = useState<string>('');

  const handleSearch = ()=>{
    console.log("HANDLE SEARCH CALLED");
    if (inputValue.trim() !== '') {
      setSearchAndRedirect(inputValue);
      console.log("SEARCHED!");
    }
  }

  return (
    <div className='flex justify-center items-center gap-1 bg-gray-900 h-10 min-w-52 max-w-4xl w-full'>
      <div className='h-full bg-gray-800 flex items-center justify-center w-10 hover:cursor-pointer' onClick={handleSearch}>
        <FaSearch className='text-purple-700 text-2xl' />
      </div>
      <input className='h-full text-center flex-1' placeholder='Search' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') { handleSearch() } }}></input>
    </div>

  )
}

export default Searchbar