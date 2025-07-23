import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
     <div className='p-0 m-0 box-border'>
      <div className='bg-gradient-to-b from-blue-600 via-blue-800  to-neutral-900 w-screen h-screen overflow-x-hidden text-white text-center'>
        <div className='pt-7 pb-7 pr-3 pl-3'>
            <div className='flex items-center flex-col gap-3'>
                <p className='text-5xl font-anton'>404 Not Found</p>
                <p className='text-2xl'>Unable to find the requested page</p>
                <Link to={'/home'}>
                    <button className='text-3xl w-40 h-20 bg-gray-900 rounded-2xl hover:bg-gray-950 hover:cursor-pointer
                    hover:scale-95 transition-all duration-150'>
                        <span className='hover:text-purple-500'>Home</span>
                    </button>
                </Link>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage