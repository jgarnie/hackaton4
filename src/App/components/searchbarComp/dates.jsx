import React, { useState, useEffect } from 'react';

const Dates=({dateStart,dateFinish})=>{
    const [dateFrom, setdateFrom] = useState('');
    const [dateTo, setdateTo] = useState('');

    useEffect(() => {
        dateStart(dateFrom)
        }, [dateFrom])

    useEffect(() => {
        dateFinish(dateTo)
        }, [dateTo])
    
const getDateTo=(e)=>{
    setdateTo(e.target.value.slice(0,10).split('-').reverse().join('/'))
}

const getDateFrom=(e)=>{
    setdateFrom(e.target.value.slice(0,10).split('-').reverse().join('/'))
}

    return (
        <div>
<input className="drop" type="date" name="fromDate" onChange={getDateFrom}/>        
  
<input className="drop" type="date" name="toDate" onChange={getDateTo}/>

</div>

    )
}
export default Dates;