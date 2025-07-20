import { useEffect } from "react";
import { useMediaFilterContext } from "../contexts/MediaFilterContext";
import type { TMDBFilterType } from "../types";

export default function useSetMediaFilterOnLoad(filter:TMDBFilterType){
    const {setFilter} = useMediaFilterContext();
    useEffect(()=>{
        setFilter(filter)
    },[])
};