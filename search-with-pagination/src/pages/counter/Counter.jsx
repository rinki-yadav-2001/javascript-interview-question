import React, { useEffect, useRef, useState } from "react";

export default function Counter(){
const [timer, setTimer] = useState(0)
const [isActive, setIsActive] = useState(false)

let timerRef =useRef(null)

useEffect(()=>{
    if(isActive){
        timerRef.current = setInterval(()=>{
            setTimer(prev=> prev+1)
        },1000)
    }else{
        clearInterval(timerRef.current)
    }

    return ()=>{
        clearInterval(timerRef.current)
    }

},[isActive])

const handleStart = () =>{
    setIsActive(true)
}
const handlePause =()=>{
    setIsActive(false)
}
const handleReset=()=>{
    setIsActive(false)
    setTimer(0)
}
function formatTimer(timer){
    const hours = Math.floor(timer/3600)
    const min = Math.floor( timer%3600 /60)
    const sec = Math.floor(timer%60)

    const formatMin = min< 10 ? `0${min} M` : `${min} M`
    const formatSec = sec< 10 ? `0${sec} S` : `${sec} S`
    return `${hours} H : ${formatMin} : ${formatSec}`
}

 return(
        <>  
      <h1>hii Counter</h1>
        <div>
            <h1>{formatTimer(timer)}</h1>
            <button type="submit"  onClick={handleStart}>START</button>
            <button type="submit" onClick={handlePause}>PAUSE</button>
            <button type="submit" onClick={handleReset}>RESET</button>
        </div></>
    
    )
}