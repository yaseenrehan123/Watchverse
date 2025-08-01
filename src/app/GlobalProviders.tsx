import React from 'react'
import { MediaGenreContextProvider } from '../contexts/MediaGenreContext'
import { MediaCountriesContextProvider } from '../contexts/MediaCountriesContext'
import { MediaPaginationContextProvider } from '../contexts/MediaPaginationContext'

const GlobalProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <MediaPaginationContextProvider>
                <MediaGenreContextProvider>
                    <MediaCountriesContextProvider>
                        {children}
                    </MediaCountriesContextProvider>
                </MediaGenreContextProvider>
            </MediaPaginationContextProvider>
        </div>
    )
}

export default GlobalProviders