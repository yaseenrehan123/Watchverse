import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchResultsText = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value: string = searchParams.get('q') ?? '';
  if (!value || value.trim() === '') {
    return <div></div>
  }
  return (
    <div className='font-roboto text-3xl text-center text-white font-bold'>
      Search Results For "{value}"
    </div>
  )
}

export default SearchResultsText