import { useEffect, useState } from "react";
import type { Status,  TMDBFetchType,  TMDBMovieDetails, TMDBTVDetails } from "../types";
import { TMDBTypeToUrl } from "../utils/TMDBTypeToUrl";

export default function (type: TMDBFetchType, id: string | undefined): { data: TMDBMovieDetails | TMDBTVDetails | undefined, status: Status } {
    const [status, setStatus] = useState<Status | undefined>(undefined);
    const [data, setData] = useState<TMDBMovieDetails | TMDBTVDetails | undefined>(undefined);

    useEffect(() => {
        if (!type || !id) return;
        const fetchMediaItem = async () => {
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
                const response = await fetch(`https://api.themoviedb.org/3/${extensionUrl}/${id}?api_key=...`, OPTIONS)
                if (!response.ok) {
                    setStatus({ state: 'Error', message: 'Something went wrong...' });
                    throw new Error("FAILED TO LOAD OVERVIEW! RESPONSE NOT OK!")
                }
                const data = await response.json();
                setData(data);
                setStatus({ state: 'Success' });
                //console.log("DATA:", data);
            }
            catch (error) {
                setStatus({ state: 'Error', message: 'Unable to load data!' })
            }
        }
        fetchMediaItem();
    }, [type, id])

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