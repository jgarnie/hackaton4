import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

export default function Results(results) {

 
    
    // console.log(results.results._results)
    if(results.results.data === undefined){
        return (<>
            <h2>your surprise holidays are waiting</h2>  
            </>
            )
    }else{
        return (
            
           
            results.results.data.map((result, index)=>{
              
            
      
            return<>
                <div key={index} className="result__card">
            
                    <p>Dept time {DateTime.fromMillis(result.dTime * 1000).toFormat('hh:mm')} 27th of June</p>
                    <p>Flight from: {result.cityFrom}</p>
                    <p>Flight to: {result.cityTo}</p>
                    <p>Number of stop over: {result.pnr_count-1}</p>
                    <p><strong>we have only: {result.availability.seats} <span>seats left!!!</span></strong></p>
                    <h5>Price: {result.price}Eur{result.currency}</h5>
                    <h4><a href={result.deep_link}>Book Now</a></h4>

                </div>
                 
            </>
     
        })
        
       )
       

    }
    
}
