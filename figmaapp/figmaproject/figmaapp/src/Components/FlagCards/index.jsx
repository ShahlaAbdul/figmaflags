import React, { useEffect, useState } from 'react'
import './style.css'
import FlagCard from '../FlagCard'
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
function FlagCards() {
  const [fetchData, setFetchData] = useState([])
  const [inputt, setInputt] = useState(" ")
  const [category, setCategory] = useState("")
   
  useEffect(() => {
      
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setFetchData(data))
    }, [])
  


  // const filteredCountries = ( fetchData.filter((x) => x.name.toLowerCase().includes(inputt.toLowerCase())) )

  return (
    <div>
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="enter the text"
          value={inputt}
          onChange={(e) => setInputt(e.target.value)}
        />
      </div>

      <div className="select">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* <option value="">Filter by Region</option> */}
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      <div className="cards">
        {fetchData
          .filter((item) =>
            item.name.common.toLowerCase().includes(inputt.toLowerCase())
          )
          // .filter((x) => x.region.toLowerCase().includes(category))
          .map((x) => (
            <Link to={"/details/name/" + x.name.common} key={x.name.common}>
              <FlagCard
                uuid={uuidv4}
                flag={x.flags.png}
                name={x.name.common}
                population={x.population}
                capital={x.capital}
                region={x.region}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default FlagCards