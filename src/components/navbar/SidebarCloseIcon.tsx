import React from 'react'
import { ImCross } from "react-icons/im";
import type { SidebarContextType } from '../../types';
import { useSidebarContext } from '../../contexts/SidebarContext';

const SidebarCloseIcon = () => {
  const context:SidebarContextType = useSidebarContext();
  return (
    <div className='flex items-center justify-center text-red-500 text-4xl absolute top-2 left-1 hover:text-red-600
    transition-all duration-150 hover:scale-95 hover:cursor-pointer' onClick={()=>context.setEnabled(false)}>
      <ImCross />
    </div>
  )
}

export default SidebarCloseIcon