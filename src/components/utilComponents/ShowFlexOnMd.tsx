import React from 'react'

const ShowFlexOnMd = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex md:hidden'>{children}</div>
  )
}

export default ShowFlexOnMd