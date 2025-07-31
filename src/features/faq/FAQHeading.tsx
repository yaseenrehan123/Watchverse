import React from 'react'

const FAQHeading = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <strong className='text-2xl'>
            <p className='flex items-center gap-1.5'>{children}</p>
        </strong>
    </div>
  )
}

export default FAQHeading