import React from 'react'
import Navlink from './Navlink'
import SidebarCloseIcon from './SidebarCloseIcon'
import { useSidebarStore } from '../../zustand-stores/useSidebarStore'
const Sidebar = () => {
  const enabled = useSidebarStore((state)=>state.enabled);
  return (
    <div className={` fixed top-0 right-0 h-full w-50 bg-black/85 ${enabled ? 'block' : 'hidden'} z-20`}>
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