import { create } from "zustand"
import type { SidebarStore } from "../types"
export const useSidebarStore = create<SidebarStore>((set)=>({
    enabled:false,
    setEnabled:(newVal:boolean)=>set(()=>({enabled:newVal}))
}));