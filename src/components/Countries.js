import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
  
    const [data,setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    
    useEffect ( () => {
    axios
    .get(
        'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags')
    .then((res) => setData(res.data));
   

   

    }, []);
    return (
        <div className="countries">
            <ul className="countries-list">
               {data.map( (country) => (
                 <Card country = {country} key={country.name}/>

    ))}
            </ul>
            
            
        </div>
    );
};

export default Countries;