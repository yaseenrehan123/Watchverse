import { createContext, useContext } from "react";
import type { SearchSuggestionsCardProps, SuggestionsCardContext } from "../types";

const SuggestionsCardContext = createContext<SuggestionsCardContext | undefined>(undefined);

export function SuggestionsCardContextProvider({value,children}:{value:SearchSuggestionsCardProps,children:React.ReactNode}){
    return (
        <SuggestionsCardContext.Provider value={{value}}>
            {children}
        </SuggestionsCardContext.Provider>
    )
}

export function useSuggestionsCardContext():SuggestionsCardContext{
    const context = useContext(SuggestionsCardContext);
    if(context === undefined)
        throw new Error("SEARCH SUGGESTIONS CARD CONTEXT NOT FOUND!");
    return context;
}