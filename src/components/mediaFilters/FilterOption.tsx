import React from 'react'
import type { FilterOptionProps } from '../../types'

const FilterOption = ({enabled,title,selected,onClick}:FilterOptionProps) => {
  return (
    <div className='flex items-center justify-center gap-2.5'>
        <div className={`w-6 h-6 rounded-2xl ${selected ?
        'bg-blue-500 flex items-center justify-center' 
        : enabled ? 'bg-white hover:cursor-pointer' 
        : 'bg-neutral-800'} transition-all duration-150`}
        onClick={()=> enabled && onClick?.()}>{selected && 
        (<div className='h-2 w-2 bg-white rounded-2xl'></div>)}
        </div>
        <span className={`font-medium font-roboto align-bottom text-[18px] ${enabled ? 'text-white' : 'text-neutral-600'}`}>{title}</span>
    </div>
  )
}

export default FilterOption