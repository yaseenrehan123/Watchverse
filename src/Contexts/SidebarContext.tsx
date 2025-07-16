import { createContext, useContext, useState } from "react";
import type { SidebarContextType } from "../types";

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarContextProvider({children}:{children:React.ReactNode}){
    const [enabled,setEnabled] = useState<boolean>(false);

    return(
        <SidebarContext.Provider value={{enabled:enabled,setEnabled:setEnabled}}>
            {children}
        </SidebarContext.Provider>
    )
};

export function useSidebarContext():SidebarContextType{
    const context = useContext(SidebarContext);

    if(context === undefined)
        throw new Error("SIDEBAR CONTEXT NOT FOUND!");

    return context;
};