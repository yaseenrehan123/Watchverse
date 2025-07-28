import { useEffect, useState } from "react";
import type { GenreData, Status } from "../types";

export default function useFetchMediaGenres(): { data: any | undefined, status: Status } {
    const [status, setStatus] = useState<Status | undefined>(undefined);
    const [data,setData] = useState<any | undefined>(undefined);
    useEffect(() => {
        const fetchGenres = async () => {
            const API_KEY: string = import.meta.env.VITE_TMDP_API_KEY;
            const OPTIONS = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            }
            try {
                setStatus({state:'Loading'});
                const response = await fetch('https://api.themoviedb.org/3/genre/movie/list',OPTIONS);
                if(!response.ok){
                    throw new Error("RESPONSE NOT OK!");
                }
                const data = await response.json();
                setData(data);
                setStatus({state:'Success'});
            }
            catch (error) {
                setStatus({ state: 'Error', message: 'Something went wrong...' })
            }
        }
        fetchGenres();
    }, []);
    if(!status){
        return {
            data:undefined,
            status:{state:'Loading'}
        }
    };
    if(status.state === 'Success'){
        if(data === undefined){
            setStatus({state:'Error',message:'Unable To Get Data'});
            throw new Error("useFetchMediaGenres() DATA UNDEFINED ON SUCCESS!");
        }
    };
    return {
        data:data!,
        status:status
    };

}