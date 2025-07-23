import React, { createContext, useContext, useState } from "react";
import type { MediaTypeContextType, MediaType } from "../types";

const MediaTypeContext = createContext<MediaTypeContextType | undefined>(undefined);

export function MediaTypeContextProvider({children}:{children:React.ReactNode}){
    const [type,setType] = useState<MediaType>('MOVIE');
    return (
        <MediaTypeContext.Provider value={{type:type,setType:setType}}>
            {children}
        </MediaTypeContext.Provider>
    )
};

export function useMediaTypeContext():MediaTypeContextType{
    const context = useContext(MediaTypeContext);
    if(context === undefined){
        throw new Error("MEDIA TYPE CONTEXT NOT FOUND!");
    };
    return context;
};