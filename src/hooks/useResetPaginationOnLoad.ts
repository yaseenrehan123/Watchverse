import { useEffect } from "react";
import { useMediaPaginationContext } from "../contexts/MediaPaginationContext";

export function useResetPaginationOnLoad(){
    const {currentPage,setPage} = useMediaPaginationContext();
    useEffect(()=>{
        if(currentPage === 1)
            return;
        setPage(1);
    },[])
};
