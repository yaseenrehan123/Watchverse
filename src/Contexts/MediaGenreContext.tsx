import React, { createContext, useContext } from "react";
import type { GenreData, MediaGenreContextType } from "../types";
import useFetchMediaGenres from "../hooks/useFetchMediaGenres";

const MediaGenreContext = createContext<MediaGenreContextType | undefined>(undefined);

export function MediaGenreContextProvider({ children }: { children: React.ReactNode }) {
    const { data,status} = useFetchMediaGenres();
    const genres:GenreData[] = data?.genres ?? [];
    return (
        <MediaGenreContext.Provider value={{ genres, status}}>
            {children}
        </MediaGenreContext.Provider>
    )
}

export function useMediaGenreContext(): MediaGenreContextType {
    const context = useContext(MediaGenreContext);
    if (context === undefined)
        throw new Error("MEDIA GENRE CONTEXT NOT FOUND!");
    return context;
}