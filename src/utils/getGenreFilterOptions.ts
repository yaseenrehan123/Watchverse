import { useMediaGenreContext } from "../contexts/MediaGenreContext";
import type { GenreData } from "../types";

export default function getGenreFilterOptions(){
    const { genres, status } = useMediaGenreContext();
    let genreOptions: { label: string, value: string }[] = [];
    if (status.state === 'Success' && genres) {
        console.log("Genres:", genres, "Type:", typeof genres, "IsArray:", Array.isArray(genres));
        genres.forEach((genre: GenreData) => {
            genreOptions.push({ label: genre.name, value: genre.id.toString() });
        });
    };
    return genreOptions;
};