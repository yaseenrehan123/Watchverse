import { useEffect } from "react";
import { useCountriesDataStore } from "../../zustand-stores/useCountriesDataStore";
import useFetchMediaCountriesData from "../fetch/useFetchMediaCountriesData";

export default function useLoadCountriesStore(): void {
    const { data, status } = useFetchMediaCountriesData();
    useEffect(() => {
        useCountriesDataStore.setState({
            countries: data,
            status: status
        });
    }, [data, status])

}