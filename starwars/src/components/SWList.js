import React, {useState, useEffect} from 'react';
import axios from 'axios';

import SWCards from './SWCards';

function SWList() {
    //set the use state here
    let [data, setData] = useState([]);

    //call the API and hope for the best!

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people')
        .then(results => {
            console.log('axios: ', results.data.results);
            setData(results.data.results);
        })
        
        .catch(err => {
            console.log('error: ', err);
        })
        

    }, [])

    return(
        <div>
             {data.map((results, index) => {
                return <SWCards name = {results.name}  height = {results.height} mass={results.mass} hairColor = {results.hair_color} eyeColor = {results.eye_color} key = {index} />
           })}
       
               
        </div>
    )
}

export default SWList;