import React from 'react'
import SuggestionsCard from './SuggestionsCard'
import type { SearchSuggestionsContainerProps, TMDBMovieData, TMDBSuggestion, TMDBTVData } from '../../../types'
import useFetchSearchSuggestions from '../../../hooks/fetch/useFetchSearchSuggestions';
import getSuggestionCardProps from '../../../utils/getSuggestionCardProps';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from "react-icons/fa6";
import useSetSearchAndRedirect from '@/hooks/useSetSearchAndRedirect';
import StatusText from '@/components/ui/statusText';
const SuggestionsContainer = ({ inputValue }: SearchSuggestionsContainerProps) => {
  const { data, status } = useFetchSearchSuggestions(inputValue);
  const setSearchAndRedirect = useSetSearchAndRedirect();
  const handleSearch = () => {
    //console.log("HANDLE SEARCH CALLED");
    if (inputValue.trim() !== '') {
      setSearchAndRedirect(inputValue);
      //console.log("SEARCHED!");
    }
  }
  
  return (
    <div className='w-full bg-gray-800 absolute inset-full left-0 z-5 flex items-center flex-col'>

      {status.state === 'Error' &&
        <div className='flex items-center justify-center w-full min-h-10 bg-gray-900'>
          <StatusText variant='errorText'>Something Went Wrong...</StatusText>
        </div>
      }

      {status.state === 'Loading' &&
        <div className='flex items-center justify-center w-full min-h-10 bg-gray-900'>
          <StatusText variant='loadingText'>Loading...</StatusText>
        </div>

      }

      {status.state === 'Success' && (
        data?.results.length > 0 && inputValue.trim() !== ''
          ? (
            <div className='w-full flex flex-col'>
              {data.results.slice(0, 5).map((suggestion: TMDBSuggestion) => {
                const props = getSuggestionCardProps(suggestion);
                return (
                  <SuggestionsCard
                    key={suggestion.id}
                    posterImgSrc={props.posterImgSrc}
                    title={props.title}
                    year={props.year}
                    category={props.category}
                    link={props.link}
                  />
                );
              })}

              <Button
                className='w-full bg-cyan-500 text-[22px] hover:cursor-pointer hover:bg-cyan-800 p-6'
                onClick={handleSearch}>
                View All Results <FaArrowRight />
              </Button>
            </div>)
          : inputValue.trim() !== ''
            ? (<div className='bg-gray-900 min-h-10 w-full flex items-center justify-center'>
              <span>No Search Results Found</span>
            </div>)
            : <div></div>
      )}
    </div>
  )
}

export default SuggestionsContainer