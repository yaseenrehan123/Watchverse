import React from 'react'
import { ImCross } from "react-icons/im";
import { useSidebarStore } from '../../zustand-stores/useSidebarStore';
const SidebarCloseIcon = () => {
  const setEnabled = useSidebarStore((state)=>state.setEnabled);
  return (
    <div className='flex items-center justify-center text-red-500 text-4xl absolute top-2 left-1 hover:text-red-600
    transition-all duration-150 hover:scale-95 hover:cursor-pointer' onClick={()=>setEnabled(false)}>
      <ImCross />
    </div>
  )
}

export default SidebarCloseIcon