import React from 'react'

import './style.css'

function FlagCard({name,flag,population,capital,uuid,region}) {
  
  return (
    <div>
      <div className="card_container">
        <div className="card_info">
          <ul key={uuid()}>
            <div className="flagImg">
              <img src={flag} alt="" />
            </div>
            <div className='card_text'>
            <p>
              <span className="main">Country:</span>
              <span>{name}</span>
            </p>
            <p>
              <span className="main">Population:</span>
              <span>{population}</span>
            </p>
            <p>
              <span className="main">Capital:</span>
              <span>{capital}</span>
            </p>
            <p>
              <span className="main">Region:</span>
              <span>{region}</span>
            </p>

            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FlagCard