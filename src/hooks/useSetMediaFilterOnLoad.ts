import { useEffect } from "react";
import { useMediaFilterContext } from "../contexts/MediaFilterContext";
import type { MediaFilter } from "../types";

export default function useSetMediaFilterOnLoad(filter:MediaFilter){
    const {setFilter} = useMediaFilterContext();
    useEffect(()=>{
        setFilter(filter)
    },[])
};