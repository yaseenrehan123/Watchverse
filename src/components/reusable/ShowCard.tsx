import React, { useEffect, useState } from 'react'
import type { ShowCardProps } from '../../types';
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ShowCard = ({ imgSrc, rating, year, title: name, link }: ShowCardProps) => {
    const [imgError, setImageError] = useState<boolean>(false);
    return (
        <div className='w-60 h-[25.5rem] bg-gray-800 flex items-center flex-col gap-3 aspect-[3/4] show-card'>
            <div className='w-full h-72 hover:cursor-pointer'>
                <Link to={link}>
                    {!imgError && imgSrc ? (<img src={imgSrc} alt="poster-img" className='w-full h-full' onError={() => setImageError(true)} />)
                        : (<div className='w-full h-full bg-gray-900 flex items-center justify-center'><p className='text-2xl font-roboto'>Poster Not Available</p></div>)
                    }
                </Link>

            </div>
            <div className=' w-full flex flex-col gap-2 pr-1 pl-1'>
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
                    <Link to={link}><span className='hover:text-cyan-500 hover:cursor-pointer line-clamp-1 overflow-x-hidden w-full'>{name}</span></Link>
                </div>
            </div>
            <div className='w-3/4 h-8 bg-gray-700 hover:bg-gray-600'>
                <button className='w-full h-full flex items-center justify-center gap-2 hover:cursor-pointer'>
                    <FaPlay className='text-white' />
                    <Link to={link}><span>Watch now</span></Link>
                </button>
            </div>
        </div>
    )
}

export default ShowCard