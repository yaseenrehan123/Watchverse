import React from 'react'
import { SearchContextProvider } from '../contexts/SearchContext'
import { SidebarContextProvider } from '../contexts/SidebarContext'
import { MediaGenreContextProvider } from '../contexts/MediaGenreContext'
import { MediaCountriesContextProvider } from '../contexts/MediaCountriesContext'
import { MediaPaginationContextProvider } from '../contexts/MediaPaginationContext'

const GlobalProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <SearchContextProvider>
                <SidebarContextProvider>
                    <MediaPaginationContextProvider>
                        <MediaGenreContextProvider>
                            <MediaCountriesContextProvider>
                                {children}
                            </MediaCountriesContextProvider>
                        </MediaGenreContextProvider>
                    </MediaPaginationContextProvider>
                </SidebarContextProvider>
            </SearchContextProvider>
        </div>
    )
}

export default GlobalProviders