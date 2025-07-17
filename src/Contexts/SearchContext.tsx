import React, { createContext, useContext, useEffect, useState } from "react";
import type { SearchContextType } from "../types";
import { Navigate, useNavigate } from "react-router-dom";


const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchContextProvider({ children }: { children: React.ReactNode }) {
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchSubmitted, setSearchSubmitted] = useState<boolean>(false);
    const navigate = useNavigate();
    const setSearchAndNavigate = (value: string, path: string) => {
        setSearchValue(value);
        setSearchSubmitted(true);
        navigate(path);
    };
    useEffect(()=>{
        console.log("SEARCH SUBMITTED:",searchSubmitted)
    },[searchSubmitted]);
    return (
        <SearchContext.Provider value={{
            searchValue: searchValue, setSearchValue: setSearchValue, setSearchAndNavigate: setSearchAndNavigate,
            searchSubmitted: searchSubmitted, setSearchSubmitted: setSearchSubmitted
        }}>
            {children}
        </SearchContext.Provider>
    )
};

export function useSearchContext(): SearchContextType {
    const context = useContext(SearchContext);
    if (context === undefined)
        throw new Error("SEACH CONTEXT NOT FOUND!");
    return context;
};