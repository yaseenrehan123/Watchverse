import React from 'react'
import FAQ from '../faq/FAQ'
import LandingPageHeader from './LandingPageHeader'
import useFetchMediaGenres from '../../hooks/useFetchMediaGenres'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center pt-14 pb-6 gap-7'>
      <LandingPageHeader/>
      <FAQ/>
    </div>
  )
}

export default LandingPage