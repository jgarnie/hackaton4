import React, { useState, useEffect } from 'react';

const Destinations=({dest})=>  {
    const [selectDestination, setselectDestination] = useState('');

    useEffect(() => {
        dest(selectDestination)
        }, [selectDestination])

const handleDestination=(e)=>{
    setselectDestination(e.target.value)
}

    return (
       
            <div className="searchbar__to">
                <select id= "dropdown__element" onChange={handleDestination}>
                    <option disabled defaultValue hidden>select a region</option>
                    <option value="VLC">Valencia</option>
                    <option value="BCN">Barcelona</option>
                    <option value="MAD">Madrid</option> 
                    <option value="MXP">Milan</option>
                    <option value="ATH">Athens</option>
                </select>
            </div>
       
        )
}
export default Destinations;
