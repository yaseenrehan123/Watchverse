import { useEffect } from "react";
import { useSearchContext } from "../contexts/SearchContext";

export default function useClearSearchOnLoad(){
    const {setSearchValue,searchSubmitted, setSearchSubmitted} = useSearchContext();
    useEffect(()=>{
        if(!searchSubmitted){
            setSearchValue('');
        }
        else{
            setSearchSubmitted(false);
        }
       
    },[])
};