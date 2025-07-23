import { useEffect } from "react";
import { useMediaTypeContext } from "../contexts/MediaTypeContext";
import type { MediaType } from "../types";

export default function useSetMediaTypeOnLoad(type:MediaType){
    const {setType} = useMediaTypeContext();
    useEffect(()=>{
        setType(type)
    },[])
};