import React from 'react'
import Searchbar from '../reusable/Searchbar'
import FAQ from '../faq/FAQ'
import ViewFullSiteBtn from '../buttons/ViewFullSiteBtn'
import RedirectingSearchbar from '../reusable/RedirectingSearchbar'
import LandingPageHeader from '../content/LandingPageHeader'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center pt-14 pb-6 gap-7'>
      <LandingPageHeader/>
      <FAQ/>
    </div>
  )
}

export default LandingPage