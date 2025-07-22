import type { Status } from "../types";

export default function mergedStatusResult(statusArr:Status[]):Status{
    if(statusArr.some(status => status.state === 'Error')){
        return {
            state:'Error',
            message:statusArr.find(status => status.state === 'Error')?.message || 'Unknown Error'
        }
    };
    if(statusArr.some(status => status.state === 'Loading')){
        return {state:'Loading'}
    };
    return {state:'Success'};
};