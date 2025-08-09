import type { StatusTextProps } from '@/types'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import React from 'react'

const StatusText = ({variant,className,children,...props}:StatusTextProps) => {
  return (
    <span{...props} className={cn(variants({variant}),className)}>{children}</span>
  )
}

const variants = cva("text-2xl font-semibold",{
    variants:{
        variant:{
            default:'text-white-500',
            errorText:'text-red-500',
            loadingText:'text-yellow-500',
            successText:'text-green-500',
        }
    },
    defaultVariants:{
        variant:'default'
    }
})

export default StatusText