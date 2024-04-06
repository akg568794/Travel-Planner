import React from 'react';
import Card from './Card';

export default function Tours({tours,removeTour}) {
  return (
    <div className='container'>
        <div>
           <h2 className='title'>Travel Planner</h2> 
        </div>
        <div className='card-container'>
            {
                tours.map((tour)=>{
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>
    </div>
  )
}
