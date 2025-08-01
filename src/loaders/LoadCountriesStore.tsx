import React from 'react'
import useFetchMediaCountriesData from '../hooks/useFetchMediaCountriesData';
import { useCountriesDataStore } from '../zustand-stores/useCountriesDataStore';

const LoadCountriesStore = () => {
    const { data, status } = useFetchMediaCountriesData();
    useCountriesDataStore.setState({
        countries: data,
        status: status
    });
    return null
}

export default LoadCountriesStore