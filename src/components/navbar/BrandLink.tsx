import React from 'react'
import { Link } from 'react-router-dom'

const BrandLink = () => {
    return (
        <div className='font-anton text-4xl bg-gradient-to-r text-transparent bg-clip-text  from-cyan-400 via-cyan-500 to-cyan-600'>
            <Link to={'/'}>Watchverse</Link>
        </div>
    )
}

export default BrandLink