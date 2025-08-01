import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { useSidebarStore } from '../../zustand-stores/useSidebarStore';

const NavMenuIcon = () => {
  const setEnabled = useSidebarStore((state) => state.setEnabled);
  return (
    <div className='flex justify-center items-center absolute top-2 right-2 text-cyan-500 text-5xl hover:cursor-pointer
    transition-all duration-150 hover:text-cyan-600 hover:scale-95' onClick={() => setEnabled(true)}>
      <IoMdMenu />
    </div>
  )
}

export default NavMenuIcon