
import React, { useState, useEffect } from 'react';
import Departures from "./searchbarComp/Departures.jsx";
import Destinations from "./searchbarComp/Destinations.jsx";
import Results from "./searchbarComp/Results.jsx";







export default function SearchBar() {
    const [selectDepart, setselecteDepart] = useState('');
    const [selectDest, setselecteDest] = useState('');
    const [directFlight, setdirectFlight] = useState(true);
    const [allFlights, setallFlights] = useState([]);
    const [dateFrom, setdateFrom] = useState([]);
    const [dateto, setdateTo] = useState([]);
    const [spinner, setSpiner] = useState(true)

const getDepart=(from)=>{

setselecteDepart(from)
}

const getDest=(to)=>{
    setselecteDest(to)

}
const getDateFrom=(e)=>{
    setdateFrom(e.target.value)
  
}
const getDateTo=(e)=>{
    setdateTo(e.target.value)
    
}



const handleclick=()=>{
    getTrip()
    
}
const handleChange=()=>{
    if(directFlight===0){
        setdirectFlight(1)
    }else{ setdirectFlight(0)}
}
const getTrip= async()=>{
    if(!allFlights) return
    setSpiner(false)
    console.log('Getting Search Results')
    const flights =`https://api.skypicker.com/flights?fly_from=${selectDepart}&fly_to=${selectDest}&dateFrom=27/06/2020&dateTo=27/06/2020&partner=picky&v=3&limit=5&sort=price&asc=1&max_stopovers=100`;
    const response = await fetch(flights)
    const data= await response.json();
   
    setallFlights(data)
    setSpiner(true)
    
  }



console.log(spinner)
    return (<>
            <div>

            
                <Departures depart={getDepart}/>
                <Destinations dest={getDest}/>
            
                <button onClick={handleclick}>find</button>
                <label htmlFor="directFlight">direct flight</label>
                <input name="directFlight" type="checkbox" value={directFlight} onChange={handleChange}/>
                <input type="date" name="fromDate" value={dateFrom} onChange={getDateFrom}/>
                <input type="date" name="toDate" value={dateto} onChange={getDateTo}/>
            </div>
            <div>
                <Results results={allFlights}/>
            </div>
            
            <div hidden={spinner} className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>


        </>
    )
}