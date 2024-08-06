import { useEffect, useState } from "react";


export function useDebounce(inputVal, d){
    const [debounceVal, setDebounceVAl] = useState(inputVal)

    useEffect(()=>{
        let timer 
        timer =setTimeout(() => {
            setDebounceVAl(inputVal)
        }, d);
        return ()=> clearTimeout(timer)
    },[d, inputVal])

    return debounceVal
}

export function debounce(cb , d){
    let timer 
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            cb(...args)
        },d)
    }
}