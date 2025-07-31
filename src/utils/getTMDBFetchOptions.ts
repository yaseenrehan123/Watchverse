export default function getTMDBFetchOptions() {
    const API_KEY: string = import.meta.env.VITE_TMDP_API_KEY;
    const OPTIONS = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
    return OPTIONS;
}