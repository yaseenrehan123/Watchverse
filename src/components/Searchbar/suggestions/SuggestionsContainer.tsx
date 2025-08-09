import React from 'react'
import SuggestionsCard from './SuggestionsCard'
import type { SearchSuggestionsContainerProps, TMDBMovieData, TMDBSuggestion, TMDBTVData } from '../../../types'
import useFetchSearchSuggestions from '../../../hooks/fetch/useFetchSearchSuggestions';
import getSuggestionCardProps from '../../../utils/getSuggestionCardProps';
import ErrorText from '../../utilComponents/ErrorText';
import LoadingText from '../../utilComponents/LoadingText';

const SuggestionsContainer = ({ inputValue }: SearchSuggestionsContainerProps) => {
  const { data, status } = useFetchSearchSuggestions(inputValue);
  return (
    <div className='w-full bg-gray-800 absolute inset-full left-0 z-5 flex items-center flex-col'>

      {status.state === 'Error' &&
        <div className='flex items-center justify-center w-full min-h-10 bg-gray-900'>
          <ErrorText content='Something went wrong...' />
        </div>
      }

      {status.state === 'Loading' &&
        <div className='flex items-center justify-center w-full min-h-10 bg-gray-900'>
          <LoadingText content='Loading...' />
        </div>

      }
      
      {status.state === 'Success' &&
        <div className='w-full flex flex-col'>
          {data.results.slice(0,5).map((suggestion: TMDBSuggestion) => {
            //console.log("SUGGESTIONS: ", data);
            const props = getSuggestionCardProps(suggestion);
            return (
                <SuggestionsCard
                  key={suggestion.id}
                  posterImgSrc={props.posterImgSrc}
                  title={props.title}
                  year={props.year}
                  duration={props.duration}
                  category={props.category}
                  link={props.link}
                />)
          })}
        </div>}
    </div>
  )
}

export default SuggestionsContainer