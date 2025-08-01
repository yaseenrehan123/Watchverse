import { create } from "zustand";
import type { OverviewDataStore } from "../types";

export const useOverviewDataStore = create<OverviewDataStore>(() => ({
    value: {
        backdropImgSrc: '',
        posterImgSrc: '',
        title: 'Unknown Media',
        overview: '',
        releaseDate: '',
        duration: '',
        genre: [],
        casts: [],
        country: '',
        production: []
    }
}));