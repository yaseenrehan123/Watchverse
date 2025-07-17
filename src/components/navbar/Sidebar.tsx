import React from 'react'
import Navlink from './Navlink'
import SidebarCloseIcon from './SidebarCloseIcon'
import type { SidebarContextType } from '../../types'
import { useSidebarContext } from '../../contexts/SidebarContext'

const Sidebar = () => {
  const context:SidebarContextType = useSidebarContext();
  return (
    <div className={` fixed top-0 right-0 h-full w-50 bg-black/85 ${context.enabled ? 'block' : 'hidden'}`}>
      <div className='flex items-center flex-col pt-20 gap-8'>
        <Navlink content='Home' href='/home'/>
        <Navlink content='Movies' href='/movies'/>
        <Navlink content='TV Shows' href='/tv-shows'/>
        <Navlink content='Top IMDG' href='/top-imdb'/>
      </div>
      <SidebarCloseIcon/>
    </div>
  )
}

export default Sidebar