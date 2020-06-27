
import React, { useState, useEffect } from 'react';
import Departures from "./searchbarComp/Departures.jsx";
import Destinations from "./searchbarComp/Destinations.jsx";
import Results from "./searchbarComp/Results.jsx";
import Header from "./searchbarComp/header.jsx";
import Dates from "./searchbarComp/dates.jsx";

export default function SearchBar() {
    const [selectDepart, setselecteDepart] = useState('');
    const [selectDest, setselecteDest] = useState('');
    const [directFlight, setdirectFlight] = useState(1);
    const [allFlights, setallFlights] = useState([]);
    const [dateFrom, setdateFrom] = useState('');
    const [dateto, setdateTo] = useState('');
    const [spinner, setSpiner] = useState(true)
    const [limit, setLimit] = useState(5)
    const [button, setButton] = useState(true)

const changeLimit=()=>{
    setLimit(limit+5)
    getTrip()
}

const getDepart=(from)=>{
    setselecteDepart(from)
}

const getDest=(to)=>{
    setselecteDest(to)
}

const getDateFrom=(from)=>{  
    setdateFrom(from)
    //setdateFrom(e.target.value.slice(0,10).split('-').reverse().join('/'))
  
    
}

const getDateTo=(to)=>{
    setdateTo(to)
    // setdateTo(e.target.value.slice(0,10).split('-').reverse().join('/'))
    
}

const handleclick=()=>{
    getTrip()
}

const handleChange=()=>{

    let changecheck = directFlight;
    if(directFlight===0){
        setdirectFlight(1)
    }else{
         setdirectFlight(0)}

    if(changecheck!==directFlight){
        getTrip()
    }
}

//fetching data and changing state of spinner 
const getTrip= async()=>{

    if(!allFlights) return

    setSpiner(false)

    console.log('Getting Search Results')

    const flights =`https://api.skypicker.com/flights?fly_from=${selectDepart}&fly_to=${selectDest}&dateFrom=${dateFrom}&dateTo=${dateto}&partner=picky&v=3&limit=${limit}&sort=price&asc=1&max_stopovers=${directFlight}`;

    const response = await fetch(flights)
    const data= await response.json();

    setallFlights(data)
    setSpiner(true)
    setButton(false)
  }


console.log(allFlights)
    return (<>
            
        <Header />

            <h1>MANGO</h1>
            <h3>Your next holidays</h3>

        <div className="searchbar">

            <Departures depart={getDepart}/>
            <Destinations dest={getDest}/>

            <Dates 
                dateStart={getDateFrom} 
                dateFinish={getDateTo}
            />
            
        </div>

        <div className="find">

            <button className="buttonclick" onClick={handleclick}>find</button>

        </div>

        <div className="checkbox">

            <label htmlFor="directFlight">   direct flight  </label>
            <input className="check" name="directFlight" type="checkbox" value={directFlight} onChange={handleChange}/>

        </div>
        
        <div hidden={button}>

            <h4>we have found {allFlights._results} deals</h4>

        </div>

        <div className="results__wrapper">

            <Results results={allFlights}/>

        </div>
        
        <button hidden={button} onClick={changeLimit}>More deals</button>
        {/* spinner */}
        <div hidden={spinner} className="spinner-border" role="status">

            <span className="sr-only">Loading...</span>

        </div>


        </>
    )
}