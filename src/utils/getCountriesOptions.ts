import type { CountriesData, FilterOption } from "../types";
import { useCountriesDataStore } from "../zustand-stores/useCountriesDataStore";
export default function getCountriesOptions() {
    const countries = useCountriesDataStore((s) => s.countries);
    const status = useCountriesDataStore((s) => s.status);
    let options: FilterOption[] = [];
    if (status.state === 'Success') {
        const sorted = [...countries].sort((a, b) => {
            return a.english_name.localeCompare(b.english_name);
        })
        sorted.forEach((country: CountriesData) => {
            options.push({ label: country.english_name, value: country.iso_3166_1 });
        });
        options.splice(0, 0, { label: 'All', value: '' });
    };
    return options;
}