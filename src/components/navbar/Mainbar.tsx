import React from 'react'
import Navlink from './Navlink'
import BrandLink from './BrandLink'
import HideFlexOnMd from '../utilComponents/HideFlexOnMd'
import ShowFlexOnMd from '../utilComponents/ShowFlexOnMd'
import NavMenuIcon from './NavMenuIcon'
import NavSearchbar from './NavSearchbar'

const Mainbar = () => {
  return (
    <div className='flex justify-between items-center w-full min-h-full pl-1 pr-1'>
        <div className='flex justify-center items-center'>
           <HideFlexOnMd><BrandLink/></HideFlexOnMd>
           <ShowFlexOnMd><div className='left-nav-search-bar'><NavSearchbar/></div></ShowFlexOnMd>
        </div>
        <div className='flex items-center justify-center gap-6'>
            <HideFlexOnMd><Navlink content='Home' href='/home'/></HideFlexOnMd>
            <HideFlexOnMd><Navlink content='Movies' href='/movies'/></HideFlexOnMd>
            <HideFlexOnMd><Navlink content='TV Shows' href='/tv-shows'/></HideFlexOnMd>
            <HideFlexOnMd><Navlink content='Top IMDG' href='/top-imdb'/></HideFlexOnMd>
        </div>
        <div>
          <ShowFlexOnMd><NavMenuIcon/></ShowFlexOnMd>
          <HideFlexOnMd><div className='right-nav-search-bar'><NavSearchbar/></div></HideFlexOnMd>
        </div>
    </div>
  )
}

export default Mainbar