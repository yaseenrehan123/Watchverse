import React, { createContext, useContext, useState } from "react";
import type { MediaFilter, MediaFilterContextType } from "../types";

const MediaFilterContext = createContext<MediaFilterContextType | undefined>(undefined);

export function MediaFilterContextProvider({children}:{children:React.ReactNode}){
    const [filter,setFilter] = useState<MediaFilter>('POPULAR');

    return (
        <MediaFilterContext.Provider value={{filter:filter,setFilter:setFilter}}>
            {children}
        </MediaFilterContext.Provider>
    )
};

export function useMediaFilterContext():MediaFilterContextType{
    const context = useContext(MediaFilterContext);
    if(context === undefined){
        throw new Error("MEDIA FILTER CONTEXT NOT FOUND!");
    }
    return context;
};