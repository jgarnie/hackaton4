import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

export default function Results(results) {
    

    
    console.log(results.results.data)
    if(results.results.data === undefined){
        return (<>
            <p>your surprise holydays are waiting</p>  
            </>
            )
    }else{
        return (results.results.data.map((result, index)=>{
            
            
      
            return(
                <div key={index} className="result__card">

                        <h2>Price: {result.price}Eur{result.currency}</h2>
                        <h4>Flight to: {result.flyTo}</h4>
                        <h4>Flight from: {result.flyFrom}</h4>
                        <h4>Departure time: {result.flyFrom}</h4>
                        

                </div>
            ) 

            
       
            
            
            
        }))

    }
    
}
