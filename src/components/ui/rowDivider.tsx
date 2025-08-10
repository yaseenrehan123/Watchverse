import { cn } from '@/lib/utils'
import type { RowDividerProps } from '@/types'
import { cva } from 'class-variance-authority'
import React from 'react'

const RowDivider = ({variant,children,className,...props}:RowDividerProps) => {
  return (
    <div {...props} className={cn(variants({variant}),className)}>{children}</div>
  )
}

const variants = cva('bg-gray-500 rounded-2xl',{
    variants:{
        variant:{
            sm:'w-1.5 h-1.5',
            md:'w-2 h-2',
            lg:'w-2.5 h-2.5',
            xl:'w-3 h-3'
        }
    },
    defaultVariants:{
        variant:'sm'
    }
})

export default RowDivider