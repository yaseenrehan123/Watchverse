import { useCountriesDataStore } from "../../zustand-stores/useCountriesDataStore";
import useFetchMediaCountriesData from "../fetch/useFetchMediaCountriesData";

export default function useLoadCountriesStore(): void {
    const { data, status } = useFetchMediaCountriesData();
    useCountriesDataStore.setState({
        countries: data,
        status: status
    });
}