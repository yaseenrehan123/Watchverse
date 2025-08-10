import React from 'react'
//import RedirectingSearchbar from '../../components/Searchbar/RedirectingSearchbar'
import ViewFullSiteBtn from '../../components/utilComponents/ViewFullSiteBtn'
import Searchbar from '../../components/Searchbar/Searchbar'

const LandingPageHeader = () => {
    return (
        <div className='flex items-center flex-col gap-7 w-full'>
            <div>
                <p className="text-6xl font-anton bg-gradient-to-r from-gray-800 via-neutral-900 to-black text-transparent bg-clip-text">
                    Watchverse
                </p>
            </div>
            <div className='min-w-52 max-w-4xl w-full'>
                <Searchbar/>
            </div>
            
            <ViewFullSiteBtn />
        </div>
    )
}

export default LandingPageHeader