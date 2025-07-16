import React from 'react'
import type { NavlinkProps } from '../../types'
import { Link } from 'react-router-dom'

const Navlink = ({content,href}:NavlinkProps) => {
  return (
    <div className='text-2xl hover:text-cyan-500 transition-all duration-150 font-anton'>
        <Link to={href}>{content}</Link>
    </div>
  )
}

export default Navlink