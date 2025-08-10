import React from 'react'
import { useSuggestionsCardContext } from '../../../contexts/SuggestionsCardContext'
import RowDivider from '@/components/ui/rowDivider';

const CardInfo = () => {
    const {value} = useSuggestionsCardContext();
   
  return (
    <div className='flex flex-col pl-4 pt-2 pb-2 gap-3 border-2 border-red-500 w-full h-full text-left'>
            <div className=' text-white font-roboto font-bold'>
                {value.title}
            </div>
            <div className='flex items-center gap-2.5'>
                <div className='text-gray-500 font-montserrat'>
                    {value.year}
                </div>
                <RowDivider variant='sm'/>
                 <div className='text-gray-500 font-montserrat'>
                    {value.duration}min
                </div>
                <RowDivider variant='sm'/>
                <div className='text-gray-500 font-montserrat'>
                    {value.category}
                </div>
            </div>
        </div>
  )
}

export default CardInfo