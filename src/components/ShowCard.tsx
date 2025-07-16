import React from 'react'
import type { ShowCardProps } from '../types';
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const ShowCard = ({imgSrc,rating,year,name}:ShowCardProps) => {
    return (
        <div className='w-60 min-h-96 bg-gray-800 flex items-center flex-col gap-3'>
            <div className='w-full h-72'><img src={imgSrc} alt="poster-img"className='w-full h-full' /></div>
            <div className=' w-full flex flex-col gap-2'>
                <div className='w-full flex gap-7'>
                    <div className='flex items-center justify-center gap-1'>
                        <FaStar className='text-cyan-500' />
                        {rating}
                    </div>
                    <div className='text-gray-500'>
                        {year}
                    </div>
                </div>
                <div className='font-roboto font-medium w-full text-left'>
                    <span className='hover:text-cyan-500 hover:cursor-pointer'>{name}</span>
                </div>
            </div>
            <div className='w-3/4 h-8 bg-gray-700 hover:bg-gray-600'>
                <button className='w-full h-full flex items-center justify-center gap-2 hover:cursor-pointer'>
                    <FaPlay className='text-white' />
                    <span>Watch now</span>
                </button>
            </div>
        </div>
    )
}

export default ShowCard