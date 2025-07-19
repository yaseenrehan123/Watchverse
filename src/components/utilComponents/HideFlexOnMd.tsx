import React from 'react'

const HideFlexOnMd = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='hidden md:flex'>{children}</div>
  )
}

export default HideFlexOnMd