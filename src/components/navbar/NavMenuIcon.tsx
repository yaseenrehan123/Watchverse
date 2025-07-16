import React from 'react'
import { IoMdMenu } from "react-icons/io";
import type { SidebarContextType } from '../../types';
import { useSidebarContext } from '../../Contexts/SidebarContext';

const NavMenuIcon = () => {
    const context:SidebarContextType = useSidebarContext();
  return (
    <div className='flex justify-center items-center absolute top-2 right-2 text-cyan-500 text-5xl hover:cursor-pointer
    transition-all duration-150 hover:text-cyan-600 hover:scale-95' onClick={()=>context.setEnabled(true)}>
        <IoMdMenu />
    </div>
  )
}

export default NavMenuIcon