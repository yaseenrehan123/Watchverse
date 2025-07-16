import React, { createContext, useContext, useState } from "react";
import type { SearchContextType } from "../types";

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchContextProvider({children}:{children:React.ReactNode}){
    const [searchValue,setSearchValue] = useState<string>('');
    return (
        <SearchContext.Provider value={{searchValue:searchValue,setSearchValue:setSearchValue}}>
            {children}
        </SearchContext.Provider>
    )
};

export function useSearchContext():SearchContextType{
    const context = useContext(SearchContext);
    if(context === undefined)
        throw new Error("SEACH CONTEXT NOT FOUND!");
    return context;
};