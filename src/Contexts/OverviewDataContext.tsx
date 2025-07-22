import { createContext, useContext} from "react";
import type { OverviewContainerProps } from "../types";

const OverviewDataContext = createContext<OverviewContainerProps | undefined>(undefined);

export function OverviewDataContextProvider({value,children}:{value:OverviewContainerProps,children:React.ReactNode}){
    return(
        <OverviewDataContext.Provider value={value}>
            {children}
        </OverviewDataContext.Provider>
    )
};

export function useOverviewDataContext():OverviewContainerProps{
    const context = useContext(OverviewDataContext);
    if(context === undefined)
        throw new Error("OVERVIEW DATA CONTEXT NOT FOUND!");
    return context;
};