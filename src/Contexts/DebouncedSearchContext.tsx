import { createContext, useContext, useState } from "react";
import type { DebouncedSearchContextType } from "../types";
import { useSearchContext } from "./SearchContext";
import { useDebounce } from "react-use";

const DebouncedSearchContext = createContext<DebouncedSearchContextType | undefined>(undefined);

export function DebouncedSearchContextProvider({children}:{children:React.ReactNode}){
    const {searchValue,setSearchValue} = useSearchContext();
    const [debouncedSearchValue,setDebouncedSearchValue] = useState<string>('');
    useDebounce(()=>setDebouncedSearchValue(searchValue),500,[searchValue])

    return(
        <DebouncedSearchContext.Provider value={{debouncedSearchValue:debouncedSearchValue}}>
            {children}
        </DebouncedSearchContext.Provider>
    )
};

export function useDebouncedSearchContext():DebouncedSearchContextType{
    const context = useContext(DebouncedSearchContext);
    if(context === undefined)
        throw new Error("DEBOUNCED SEARCH CONTEXT NOT FOUND!");
    return context;
}