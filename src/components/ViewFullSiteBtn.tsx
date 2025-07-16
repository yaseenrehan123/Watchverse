import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from "react-icons/fa";
const ViewFullSiteBtn = () => {
  return (
    <div>
        <Link to={'/home'} className='flex items-center justify-center'>
        <button className='w-70 h-20 rounded-[50px] bg-cyan-500 text-2xl text-center font-roboto hover:cursor-pointer
        transition-all duration-150 hover:scale-105 hover:shadow-cyan-400 shadow-lg flex items-center justify-center gap-3
        font-bold'>
            <span>View Full Site</span>
            <FaArrowAltCircleRight />
        </button>
            
        </Link>
    </div>
  )
}

export default ViewFullSiteBtn