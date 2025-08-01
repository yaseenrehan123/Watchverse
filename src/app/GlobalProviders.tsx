import React from 'react'
import { MediaCountriesContextProvider } from '../contexts/MediaCountriesContext'

const GlobalProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <MediaCountriesContextProvider>
                {children}
            </MediaCountriesContextProvider>
        </div>
    )
}

export default GlobalProviders