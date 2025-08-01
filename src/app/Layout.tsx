import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import GlobalProviders from './GlobalProviders'
import LoadGenresStore from '../loaders/loadGenresStore'

const Layout = () => {
  return (
    <div className='p-0 m-0 box-border'>
      <div className='bg-gradient-to-b from-blue-600 via-blue-800  to-neutral-900 w-screen h-screen overflow-x-hidden text-white text-center'>
        <div className='pt-7 pb-7 pr-3 pl-3'>
          <GlobalProviders>
            <LoadGenresStore/>
            <Navbar />
            <Outlet />
          </GlobalProviders>
        </div>
      </div>
    </div>
  )
}

export default Layout