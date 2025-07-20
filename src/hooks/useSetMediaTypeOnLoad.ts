import { useEffect } from "react";
import { useMediaTypeContext } from "../contexts/MediaTypeContext";
import type { TMDBFetchType } from "../types";

export default function useSetMediaTypeOnLoad(type:TMDBFetchType){
    const {setType} = useMediaTypeContext();
    useEffect(()=>{
        setType(type)
    },[])
};