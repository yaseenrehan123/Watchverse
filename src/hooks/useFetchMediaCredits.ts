import { useEffect, useState } from "react";
import type { Status, TMDBFetchType } from "../types";
import { TMDBTypeToUrl } from "../utils/TMDBTypeToUrl";

export default function useFetchMediaCredits(type: TMDBFetchType, id: string | undefined): { data: any | undefined, status: Status } {
    const [status, setStatus] = useState<Status | undefined>(undefined);
    const [data, setData] = useState<any | undefined>(undefined);

    useEffect(() => {
        const fetchCredits = async () => {
            const extensionUrl:string = TMDBTypeToUrl(type);
            const API_KEY: string = import.meta.env.VITE_TMDP_API_KEY;
            const OPTIONS = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            };
            try {
                setStatus({ state: 'Loading' });
                const response = await fetch(`https://api.themoviedb.org/3/${extensionUrl}/${id}/credits?api_key=...`, OPTIONS)
                if (!response.ok) {
                    setStatus({ state: 'Error', message: 'Something went wrong...' })
                }
                const data = await response.json();
                setData(data);
                setStatus({state:'Success'});
            }
            catch (error) {
                setStatus({ state: 'Error', message: 'Something went wrong...' })
            }

        };
        fetchCredits();
    }, [type, id]);

    if (!status) {
        return {
            data: undefined,
            status: { state: "Loading" },
        };
    };

    if (status?.state == 'Success') {
        if (data === undefined || status === undefined)
            throw new Error("DATA UNDEFINED ON SUCCESS!")
    };
    const result = {
        data: data,
        status: status!
    };
    return result;
}