import { createContext, useContext } from "react";
import type { CountriesData, MediaCountriesContextType } from "../types";
import useFetchMediaCountriesData from "../hooks/useFetchMediaCountriesData";

const MediaCountriesContext = createContext<MediaCountriesContextType | undefined>(undefined);

export function MediaCountriesContextProvider({children}:{children:React.ReactNode}){
    const {data,status} = useFetchMediaCountriesData();
    const countries = data; 
    return <MediaCountriesContext.Provider value={{countries,status}}>
        {children}
    </MediaCountriesContext.Provider>
};

export function useMediaCountriesContext():MediaCountriesContextType{
    const context = useContext(MediaCountriesContext);
    if(context === undefined)
        throw new Error("MEDIA COUNTRIES CONTEXT NOT FOUND!");
    return context;
};