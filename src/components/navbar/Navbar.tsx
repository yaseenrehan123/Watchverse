import React from 'react'
import Mainbar from './Mainbar'
import Sidebar from './Sidebar'

const Navbar = () => {
  return (
    <div className='min-h-16 w-full fixed top-0 left-0 bg-black flex justify-center items-center z-10'>
        <Mainbar/>
        <Sidebar/>
    </div>
  )
}

export default Navbar