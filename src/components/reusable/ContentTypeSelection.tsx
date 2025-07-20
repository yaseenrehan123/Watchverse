import React from 'react'
import { TbPlayerPlayFilled } from "react-icons/tb";
import { FaList } from "react-icons/fa6";
import { useMediaTypeContext } from '../../contexts/MediaTypeContext';
import { useMediaPaginationContext } from '../../contexts/MediaPaginationContext';
import type { TMDBFetchType } from '../../types';
const ContentTypeSelection = () => {
    const {type,setType} = useMediaTypeContext();
    const {setPage} = useMediaPaginationContext();
    const onClick =(type:TMDBFetchType)=>{
      setType(type)
      setPage(1);
    }
  return (
    <div className='flex items-center justify-center gap-7 font-roboto font-bold text-[20px] align-baseline'>
        <div className={`flex items-center justify-center gap-3
        ${type === 'MOVIE' ? 'text-cyan-500 hover:text-cyan-800' : 'text-white hover:text-cyan-400 hover:scale-95'}
        hover:cursor-pointer transition-all duration-150`} onClick={()=>onClick('MOVIE')}>
            <TbPlayerPlayFilled />
            <span>Movies</span>
        </div>
        <div className={`flex items-center justify-center gap-3
        ${type === 'TV' ? 'text-cyan-500 hover:text-cyan-800' : 'text-white hover:text-cyan-400 hover:scale-95'}
        hover:cursor-pointer duration-150 transition-all`} onClick={()=>onClick('TV')}>
            <FaList />
            <span>TV</span>
        </div>
    </div>
  )
}

export default ContentTypeSelection