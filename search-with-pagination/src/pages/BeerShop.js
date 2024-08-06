
import Beer from '../components/Beer/Beer'; 
import { useEffect, useState } from 'react';

const URL = `https://api.punkapi.com/v2/beers`;

function BeerShop() {
const [beers, setBeers] = useState([])
const [searchQuery, setSearchQuery] =  useState('')

async function fetchBeer(searchQuery){
  const queryParam = searchQuery ? `?beer_name=${searchQuery}` : '';
    try{
      const res = await fetch(`${URL}${queryParam}`)
      const result = await res.json()
   

      setBeers(result)
    }catch (e){
      console.log(e)

    }
}
useEffect(()=>{
  fetchBeer(searchQuery)
},[searchQuery])

  return (
    <div >
      <input type='text' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} />       

      {
        beers.map(beer=>{
          console.log(beer)
          return <Beer key ={beer.name} {...beer} />
        })
      }
   
    </div>
  );
}

export default BeerShop;
