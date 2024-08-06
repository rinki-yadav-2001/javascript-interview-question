import React, { useEffect, useState } from 'react'
import { debounce, useDebounce } from '../customHooks/useDebounce'

function CountryList() {
    
    const [inputVal, setInputVal] = useState(' ')
    const [contries, setCountries] = useState([])

    //    this is by useDebounce 
    // const debounceVal = useDebounce(inputVal,1000)
    const fetchCountries= async function(query){
        try{
            const result = await fetch(`https://algochurn-server.onrender.com/practice/countries/${query}`)
            const data =  await result.json()
            console.log(data)
            setCountries(data.countries)
        }catch(err){
            console.log(err)
        }
    }

    // by use of debounce method
    const fetchCountriesDebounceMethod = debounce(fetchCountries, 1000)

//    this is by useDebounce 


    // useEffect(() => {
    //     if (debounceVal) {
    //       fetchCountries(debounceVal);
    //     } else {
    //       setCountries([]); // Clear countries if input is empty
    //     }
    //   }, [debounceVal]);


    // by use of debounce method
    useEffect(()=>{
        fetchCountriesDebounceMethod(inputVal)
    },[inputVal])

  

    const handleChange =(e)=>{
        setInputVal(e.target.value)
    }

    const handleSuggestion = (suggestion)=>{
        setInputVal(suggestion)
        setCountries([])
    }

  return (
    <div>
      <input type="text"  value={inputVal}  onChange={handleChange} />
      {
        contries?.map((item,index)=>{
            return <div key={index} onClick={()=>handleSuggestion(item)}>{item}</div>
        })
      }
    </div>
  )
}

export default CountryList
