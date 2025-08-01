import { create } from "zustand";
import type { GenresDataStore } from "../types";

export const useGenresDataStore = create<GenresDataStore>(()=>({
    genres:[],
    status:{state:'Loading'}
}));