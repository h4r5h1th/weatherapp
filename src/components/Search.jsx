import React, { useState } from 'react'
import '../csscomponents/Search.css'
function Search({setcite}) {
  const [city, setCity] = useState("New York")
  return (
    <div className='searchdiv'>
        <input className='Searchbar' placeholder='🔍City Name!' value={city} onChange={x=>setCity(x.target.value)}></input>
        <button className='SrchButton' onClick={()=>setcite(city)}>Go!</button>
    </div>
  )
}

export default Search