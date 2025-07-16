import React from 'react'

const FAQHeading = ({content}:{content:string}) => {
  return (
    <div>
        <strong className='text-2xl'>
            <p>{content}</p>
        </strong>
    </div>
  )
}

export default FAQHeading