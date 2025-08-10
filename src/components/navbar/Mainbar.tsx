import React from 'react'
import Navlink from './Navlink'
import BrandLink from './BrandLink'
import NavMenuIcon from './NavMenuIcon'
import Searchbar from '../Searchbar/Searchbar'
import Responsive from '../ui/responsive'
//import NavSearchbar from '../Searchbar/NavSearchbar'

const Mainbar = () => {
  return (
    <div className='flex justify-between items-center w-full min-h-full pl-1 pr-1'>
        <div className='flex justify-center items-center'>
           <Responsive display='hidden' md='flex'><BrandLink/></Responsive>
           <Responsive display='flex' md='hidden' className='left-nav-search-bar'><Searchbar/></Responsive>
        </div>
        <div className='flex items-center justify-center gap-6'>
            <Responsive display='hidden' md='flex'><Navlink content='Home' href='/home'/></Responsive>
            <Responsive display='hidden' md='flex'><Navlink content='Movies' href='/movies'/></Responsive>
            <Responsive display='hidden' md='flex'><Navlink content='TV Shows' href='/tv-shows'/></Responsive>
            <Responsive display='hidden' md='flex'><Navlink content='Top IMDG' href='/top-imdb'/></Responsive>
        </div>
        <div>
          <Responsive display='flex' md='hidden'><NavMenuIcon/></Responsive>
          <Responsive display='hidden' md='flex'><div className='right-nav-search-bar'><Searchbar/></div></Responsive>
        </div>
    </div>
  )
}

export default Mainbar