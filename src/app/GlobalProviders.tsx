import React from 'react'
import { MediaGenreContextProvider } from '../contexts/MediaGenreContext'
import { MediaCountriesContextProvider } from '../contexts/MediaCountriesContext'

const GlobalProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <MediaGenreContextProvider>
                <MediaCountriesContextProvider>
                    {children}
                </MediaCountriesContextProvider>
            </MediaGenreContextProvider>
        </div>
    )
}

export default GlobalProviders