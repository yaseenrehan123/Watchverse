import React, { createContext, useContext, useEffect, useState } from "react";
import type { SearchContextType } from "../types";
import { Navigate, useNavigate} from "react-router-dom";


const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchContextProvider({ children }: { children: React.ReactNode }) {
    const [searchValue, setSearchValue] = useState<string>('');
    const navigate = useNavigate();
    const setSearchAndRedirect = (value: string) => {
        setSearchValue(value);
        navigate(`/search?q=${encodeURIComponent(value)}&page=${encodeURIComponent(1)}`);
    };
    return (
        <SearchContext.Provider value={{
            searchValue: searchValue, setSearchAndRedirect:setSearchAndRedirect
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