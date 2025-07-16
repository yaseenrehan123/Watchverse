import React from 'react'
import Searchbar from '../Searchbar'
import FAQ from '../faq/FAQ'
import ViewFullSiteBtn from '../ViewFullSiteBtn'
import useTVShowsData from '../../Hooks/useTVShowsData'

const LandingPage = () => {
  const result = useTVShowsData();
  console.log("TV SHOWS: ",result.data);
  return (
    <div className='flex flex-col items-center pt-14 pb-6 gap-7'>
      <div>
        <p className="text-6xl font-anton bg-gradient-to-r from-gray-800 via-neutral-900 to-black text-transparent bg-clip-text">
          Watchverse
        </p>
      </div>
      <Searchbar/>
      <ViewFullSiteBtn/>
      <FAQ/>
    </div>
  )
}

export default LandingPage