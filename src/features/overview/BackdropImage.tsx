import React, { useState } from 'react'
import { useOverviewDataContext } from '../../contexts/OverviewDataContext';

const BackdropImage = () => {
    const [backdropImgError, setBackdropImgError] = useState<boolean>(false);
    const {backdropImgSrc} = useOverviewDataContext();
    return (
        <div className='w-full h-full absolute inset-0 flex items-center justify-center z-0'>
            {(!backdropImgError && backdropImgSrc
                ? (<img className='w-full h-full object-cover object-center overflow-hidden' src={backdropImgSrc} alt="Backdrop Image" onError={() => setBackdropImgError(true)} />)
                : (<div className='w-full h-full bg-neutral-900'></div>)
            )}
        </div>
    )
}

export default BackdropImage