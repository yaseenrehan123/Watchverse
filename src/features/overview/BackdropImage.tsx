import React, { useState } from 'react'
import { motion, MotionConfig } from "framer-motion";
import { useOverviewDataStore } from '../../zustand-stores/useOverviewDataStore';
const BackdropImage = () => {
    const [backdropImgError, setBackdropImgError] = useState<boolean>(false);
    const backdropImgSrc = useOverviewDataStore((s) => s.value.backdropImgSrc);
    return (
        <div className='flex items-center justify-center'>
            <MotionConfig transition={{ type: 'spring', duration: 3.5, bounce: 0.2 }}>
                <motion.div className='w-full h-full absolute inset-0 flex items-center justify-center z-0'
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>
                    {(!backdropImgError && backdropImgSrc
                        ? (<motion.img className='w-full h-full object-cover object-center overflow-hidden' src={backdropImgSrc} alt="Backdrop Image" onError={() => setBackdropImgError(true)} layout />)
                        : (<div className='w-full h-full bg-neutral-900'></div>)
                    )}
                </motion.div>
            </MotionConfig>
        </div>


    )
}

export default BackdropImage