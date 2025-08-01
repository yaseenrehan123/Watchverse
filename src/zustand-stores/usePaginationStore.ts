import { create } from "zustand"
import type { PaginationStore } from "../types"
export const usePaginationStore = create<PaginationStore>((set)=>({
    totalPages:1,
    setTotalPages:(val:number)=>set(()=>({totalPages:val}))
}));