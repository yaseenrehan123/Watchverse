import React from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'
import {motion, MotionConfig} from "framer-motion";
const HomeHeader = () => {
  return (
    <header className='flex items-center flex-col gap-4 pt-13'>
      <MotionConfig transition={{duration:4, type:'spring', bounce:0.2}}>
        <motion.img src="images/movies-header-img.png" alt="Hero Banner"
        initial={{y:20, opacity:0}}
        animate={{y:0, opacity:1}} />
      </MotionConfig>
        
        <h1 className='text-5xl font-anton'>Find
             <span className='bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 text-transparent bg-clip-text'> Movies </span>
             You'll Enjoy Without Hassle
        </h1>
        <Searchbar/>
    </header>
  )
}

export default HomeHeader