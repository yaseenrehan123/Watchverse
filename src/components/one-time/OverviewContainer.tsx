import React, { useState } from 'react'
import type { OverviewContainerProps } from '../../types';

const OverviewContainer = ({
    backdropImgSrc,
    posterImgSrc,
    title,
    overview,
    releaseDate,
    duration,
    genre,
    casts,
    country,
    production
}: OverviewContainerProps) => {
    const [backdropImgError, setBackdropImgError] = useState<boolean>(false);
    const [posterImgError, setPosterImgError] = useState<boolean>(false);
    return (
        <div className='w-screen h-screen overflow-hidden flex flex-col items-center gap-5 relative pt-20'>
            <div className='w-full h-full absolute inset-0 flex items-center justify-center z-0'>
                {(!backdropImgError && backdropImgSrc
                    ? (<img className='w-full h-full object-cover object-center overflow-hidden' src={backdropImgSrc} alt="Backdrop Image" onError={() => setBackdropImgError(true)} />)
                    : (<div className='w-full h-full bg-neutral-900'></div>)
                )}
            </div>
            <div className='w-full h-full absolute z-5 bg-gradient-to-t from-black via-black/80 to-black/40 top-0 left-0'></div>
            <div className='z-10 flex items-center justify-center gap-8'>
                <div className='h-80 w-56 shadow-black shadow-2xl'>
                    {(!posterImgError && posterImgSrc)
                        ? (<img src={`https://image.tmdb.org/t/p/w500${posterImgSrc}`} alt='Poster Image'
                            onError={() => setPosterImgError(true)}  className='w-full h-full'/>)
                        : (<div className='w-full h-full bg-gray-600 flex items-center justify-center'>
                            <span>No Poster Available</span>
                        </div>)
                    }
                </div>
                <div className='flex flex-col gap-5 border-2 border-red-500 min-h-full'>
                    <div className='flex items-center justify-center'>
                        <span className='font-anton text-3xl tracking-wider'>{title}</span>
                    </div>
                    <div className='flex flex-col items-baseline gap-2'>
                        <span className='font-roboto font-bold'>Overview:</span>
                        <span className='text-sm leading-relaxed max-w-3xl text-left text-neutral-400 font-montserrat'>{overview}</span>
                    </div>
                    <div className='grid grid-cols-2 justify-center gap-20 max-w-3xl'>
                        <div className='flex flex-col gap-1.5 text-left'>
                            <div className='flex items-start gap-1'>
                                <div><strong>Released:</strong> <span className='text-neutral-400'>{releaseDate}</span></div>
                            </div>
                            <div className='flex items-start gap-1'>
                                <div><strong>Genre:</strong> <span className='text-neutral-400'>{genre.join(', ')}</span></div>
                            </div>
                            <div className='flex items-start gap-1'>
                                <div><strong>Casts:</strong> <span className='text-neutral-400'>{casts.join(', ')}</span></div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <div className='flex items-start gap-1'>
                                <div><strong>Duration:</strong> <span className='text-neutral-400'>{duration}</span></div>
                            </div>
                            <div className='flex items-start gap-1'>
                                <div><strong>Country:</strong> <span className='text-neutral-400'>{country}</span></div>
                            </div>
                            <div className='flex items-start text-left'>
                                <div><strong>Production:</strong> <span className='text-neutral-400'>{production.join(', ')}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewContainer