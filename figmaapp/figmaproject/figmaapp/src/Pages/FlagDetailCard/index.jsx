import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function FlagCarddetail() {
  const [selectdetail, setSelectdetail] = useState([])
  let { name } = useParams();


  useEffect(() => {
 
    fetch("https://restcountries.com/v3.1/name/"+ name)
      .then((res) => res.json())
      .theh((data) => setSelectdetail(data[0]))
  }, []);

  return (
    <div>
      <h2> guy3ruiqwoepksalhufwedokla</h2>
      <div className="detailCard">
        {selectdetail && (
          <ul key={selectdetail.name}>
            <div className="detailimg">
              <img src={selectdetail.flags?.png} alt="" />
            </div>
            <li className="">{selectdetail.name?.common}</li>

            <li>
              <span> Native Name: </span>
              {selectdetail.name?.official}
            </li>
            <li>
              <span className="main">Country:</span>
              {selectdetail.name?.official}
            </li>
            <li>
              <span className="main">Population:</span>
              {selectdetail.population}
            </li>
            <li>
              <span className="main">Capital:</span>
              {selectdetail.subregion}
            </li>
            <li>
              <span className="main">Region:</span>
              {selectdetail.capital}
            </li>
            <li>
              Native Name: Population Region Sub Region: Top Level Domain:{" "}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default FlagCarddetail;
