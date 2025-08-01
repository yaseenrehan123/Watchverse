import React from 'react'
import { useGenresDataStore } from '../zustand-stores/useGenresDataStore';
import useFetchMediaGenres from '../hooks/useFetchMediaGenres';

const LoadGenresStore = () => {
    const { data, status } = useFetchMediaGenres();
    useGenresDataStore.setState({
        genres: data?.genres ?? [],
        status: status
    });
    return null;
}

export default LoadGenresStore