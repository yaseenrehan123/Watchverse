import React from 'react'
import Navlink from './Navlink'
import BrandLink from './BrandLink'
import HideFlexOnSmallSize from '../utils/HideFlexOnSmallSize'
import ShowFlexOnSmallSize from '../utils/ShowFlexOnSmallSize'
import NavMenuIcon from './NavMenuIcon'

const Mainbar = () => {
  return (
    <div className='flex justify-between items-center w-full min-h-full'>
        <div className='flex justify-center items-center'>
           <HideFlexOnSmallSize><BrandLink/></HideFlexOnSmallSize>
        </div>
        <div className='flex items-center justify-center gap-6'>
            <HideFlexOnSmallSize><Navlink content='Home' href='/home'/></HideFlexOnSmallSize>
            <HideFlexOnSmallSize><Navlink content='Movies' href='/movies'/></HideFlexOnSmallSize>
            <HideFlexOnSmallSize><Navlink content='TV Shows' href='/tv-shows'/></HideFlexOnSmallSize>
            <HideFlexOnSmallSize><Navlink content='Top IMDG' href='/top-imdb'/></HideFlexOnSmallSize>
        </div>
        <div>
          <ShowFlexOnSmallSize><NavMenuIcon/></ShowFlexOnSmallSize>
        </div>
    </div>
  )
}

export default Mainbar