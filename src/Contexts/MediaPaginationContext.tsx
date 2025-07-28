import { createContext, useContext, useState } from "react";
import type { MediaPaginationContextType } from "../types";

const MediaPaginationContext = createContext<MediaPaginationContextType | undefined>(undefined);

export function MediaPaginationContextProvider({children}:{children:React.ReactNode}) {
    const [totalPages,setTotalPages] = useState<number>(1);
    return (
        <MediaPaginationContext.Provider value={{totalPages:totalPages , setTotalPages:setTotalPages}}>
            {children}
        </MediaPaginationContext.Provider>
    )
}

export function useMediaPaginationContext():MediaPaginationContextType{
    const context = useContext(MediaPaginationContext);
    if(context === undefined)
        throw new Error("MEDIA PAGINATION CONTEXT NOT FOUND!");
    return context;
}