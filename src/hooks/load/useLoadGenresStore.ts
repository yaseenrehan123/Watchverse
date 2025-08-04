import { useEffect } from "react";
import { useGenresDataStore } from "../../zustand-stores/useGenresDataStore";
import useFetchMediaGenres from "../fetch/useFetchMediaGenres";

export default function useLoadGenresStore(): void {
    const { data, status } = useFetchMediaGenres();
    useEffect(() => {
        useGenresDataStore.setState({
            genres: data?.genres ?? [],
            status: status
        });
    },[data,status])

};