import React from 'react'
import type { SearchSuggestionsCardProps } from '../../../types'
import { SuggestionsCardContextProvider } from '../../../contexts/SuggestionsCardContext'
import CardImage from './CardImage'
import CardInfo from './CardInfo'
import { useNavigate } from 'react-router-dom'

const SuggestionsCard = (props: SearchSuggestionsCardProps) => {
    const navigate = useNavigate();
    const onClick =()=>{
        navigate(props.link);
    }
    return (
        <div className='w-full bg-gray-800 hover:bg-gray-600 hover:cursor-pointer transition-all duration-150 flex items-center
    p-2 gap-3' onClick={onClick}>
            <SuggestionsCardContextProvider value={props}>
                <CardImage />
                <CardInfo />
            </SuggestionsCardContextProvider>

        </div>
    )
}

export default SuggestionsCard