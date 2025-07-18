import React from 'react'
import { SearchContextProvider } from '../../contexts/SearchContext'
import { DebouncedSearchContextProvider } from '../../contexts/DebouncedSearchContext'
import { SidebarContextProvider } from '../../contexts/SidebarContext'
import { MediaTypeContextProvider } from '../../contexts/MediaTypeContext'
import { MediaFilterContextProvider } from '../../contexts/MediaFilterContext'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <SearchContextProvider>
                <DebouncedSearchContextProvider>
                    <SidebarContextProvider>
                        <MediaTypeContextProvider>
                            <MediaFilterContextProvider>
                                {children}
                            </MediaFilterContextProvider>
                        </MediaTypeContextProvider>
                    </SidebarContextProvider>
                </DebouncedSearchContextProvider>
            </SearchContextProvider>
        </div>
    )
}

export default Providers