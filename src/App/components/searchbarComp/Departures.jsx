
import React, { useState, useEffect } from 'react';

 const Departures=({depart})=> {
    const [selectDeparture, setselecteDeparture] = useState('');
  
    useEffect(() => {
      depart(selectDeparture)
      }, [selectDeparture])


    const handleDeparture=(e)=>{
        setselecteDeparture(e.target.value)
    }
    return (
   
            <div className="searchbar__from">
             <select id= "dropdown__element" onChange={handleDeparture}>
                <option disabled defaultValue hidden>select a region</option>
                <option value="PRG">Prague</option>
                <option value="SXF">Berlin</option>
                <option value="WAW">Warsaw</option> 
                <option value="PED">Pardubice</option>
            </select>
            </div>
       
    )
}
export default Departures;