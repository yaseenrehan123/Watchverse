import React from 'react'
import { SearchContextProvider } from '../contexts/SearchContext'
import { DebouncedSearchContextProvider } from '../contexts/DebouncedSearchContext'
import { SidebarContextProvider } from '../contexts/SidebarContext'
import { MediaTypeContextProvider } from '../contexts/MediaTypeContext'
import { MediaFilterContextProvider } from '../contexts/MediaFilterContext'
import { MediaPaginationContextProvider } from '../contexts/MediaPaginationContext'
import { MediaGenreContextProvider } from '../contexts/MediaGenreContext'
import { MediaCountriesContextProvider } from '../contexts/MediaCountriesContext'

const GlobalProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <SearchContextProvider>
                <DebouncedSearchContextProvider>
                    <SidebarContextProvider>
                        <MediaTypeContextProvider>
                            <MediaFilterContextProvider>
                                <MediaPaginationContextProvider>
                                    <MediaGenreContextProvider>
                                        <MediaCountriesContextProvider>
                                            {children}
                                        </MediaCountriesContextProvider>
                                    </MediaGenreContextProvider> 
                                </MediaPaginationContextProvider>
                            </MediaFilterContextProvider>
                        </MediaTypeContextProvider>
                    </SidebarContextProvider>
                </DebouncedSearchContextProvider>
            </SearchContextProvider>
        </div>
    )
}

export default GlobalProviders