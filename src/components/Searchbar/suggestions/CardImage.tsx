import React, { useState } from 'react'
import { useSuggestionsCardContext } from '../../../contexts/SuggestionsCardContext'

const CardImage = () => {
    const {value} = useSuggestionsCardContext();
    const [error,setError] = useState<boolean>(false);
    return (
        <div className='w-14 h-18 rounded-2xl'>
            {
                !error && value
                ? <img src={value.posterImgSrc} alt='Suggestion Poster Image' className='w-full h-full' onError={()=>setError(true)}/>
                : <div className='w-full h-full bg-gray-900 flex items-center justify-center text-white font-roboto font-semibold
                text-[10px]'>
                    Poster Not Found
                </div>
            }
           
        </div>
    )
}

export default CardImage