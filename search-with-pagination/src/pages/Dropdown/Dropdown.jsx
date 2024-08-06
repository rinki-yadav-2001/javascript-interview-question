import {  useState } from "react";


const countries = [
  {
    name: "India",
    value: "IND",
    cities: ["Kolkata", "Hyderabad"],
  },
  {
    name: "Pakistan",
    value: "Pak",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "Bangladesh",
    value: "Ban",
    cities: ["Dhaka", "Chittagong"],
  },
];
export default function DropDown() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
 

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <select name={selectedCountry} onChange={(e)=> setSelectedCountry(e.target.value)}>
        {
        countries.map((item)=>{
            return <option key={item.name} value={item.name}>{item.name}</option>
        
        })
    }
    </select>
    {selectedCountry &&  <select name={selectedCity}  onChange={(e)=> setSelectedCity(e.target.value)} >
    
    {
        countries.find(item => item.name===selectedCountry).cities.map(city=>{
            return <option key ={city} value={city}>{city}</option>
        })
    }

    </select>
    }
   
    
    </div>
  );
}
