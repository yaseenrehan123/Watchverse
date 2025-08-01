import { create } from "zustand";
import type { CountriesDataStore } from "../types";

export const useCountriesDataStore = create<CountriesDataStore>(()=>({
    countries:[],
    status:{state:'Loading'}
}));