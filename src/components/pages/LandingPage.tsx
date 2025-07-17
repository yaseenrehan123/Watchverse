import React from 'react'
import Searchbar from '../reusable/Searchbar'
import FAQ from '../faq/FAQ'
import ViewFullSiteBtn from '../buttons/ViewFullSiteBtn'
import RedirectingSearchbar from '../reusable/RedirectingSearchbar'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center pt-14 pb-6 gap-7'>
      <div>
        <p className="text-6xl font-anton bg-gradient-to-r from-gray-800 via-neutral-900 to-black text-transparent bg-clip-text">
          Watchverse
        </p>
      </div>
      <RedirectingSearchbar path='/home'/>
      <ViewFullSiteBtn/>
      <FAQ/>
    </div>
  )
}

export default LandingPage