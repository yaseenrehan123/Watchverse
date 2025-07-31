import { useEffect, useState } from "react";
import type { CountriesData, Status } from "../types";
import getTMDBFetchOptions from "../utils/getTMDBFetchOptions";

export default function useFetchMediaCountriesData(): { data: CountriesData[], status: Status } {
    const [status, setStatus] = useState<Status | undefined>(undefined);
    const [data, setData] = useState<CountriesData[]>([]);
    useEffect(() => {
        const fetchCountries = async () => {
            try {
               const OPTIONS = getTMDBFetchOptions();
                const response = await fetch('https://api.themoviedb.org/3/configuration/countries', OPTIONS);
                if (!response.ok) {
                    setStatus({ state: 'Error', message: 'Something went wrong...' });
                };
                const data = await response.json();
                setData(data);
                setStatus({ state: 'Success' });
            }
            catch (error) {
                setStatus({ state: 'Error', message: 'Unable To Fetch Countries' });
            }
        };
        fetchCountries();
    }, []);
    if (!status)
        return {
            data: [],
            status: { state: 'Loading' }
        }
    if(status?.state === 'Success' && data === undefined){
        setStatus({state:'Error',message:'Data unintentionally missing..'});
        throw new Error("COUNTRIES DATA NOT FOUND ON SUCCESS!");
    }
    return {
        data:data!,
        status:status
    }

}