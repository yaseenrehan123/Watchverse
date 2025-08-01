import type { FilterOption, GenreData } from "../types";
import { useGenresDataStore } from "../zustand-stores/useGenresDataStore";

export default function getGenreFilterOptions(){
    const genres = useGenresDataStore((s)=>s.genres);
    const status = useGenresDataStore((s)=>s.status);
    let genreOptions: FilterOption[] = [];
    if (status.state === 'Success' && genres) {
        console.log("Genres:", genres, "Type:", typeof genres, "IsArray:", Array.isArray(genres));
        genres.forEach((genre: GenreData) => {
            genreOptions.push({ label: genre.name, value: genre.id.toString() });
        });
        genreOptions.splice(0,0,{label:'All',value:''})
    };  
    return genreOptions;
};