import React from 'react';

const Card = (props) => {
    const {country} = props;

    const numberFormat = (x) =>
    {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  
    return (
       <li className ="card">
           <img src={country.flags.png} alt="flag" />
           <div className="data-container">
             <li>{country.name.official}</li>
             <li>Capital: {country.capital}</li>
             <li>Population : {numberFormat(country.population)}</li>
           </div>
       </li>
    );
};

export default Card;