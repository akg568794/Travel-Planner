import React, { useState } from 'react'
import './App.css';
import data from './data';
import Tours from './components/Tours';

export default function App() {
  const [tours,setTours]=useState(data);
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }
  if(tours.length===0){
    return (
      <div className="refresh">
        <h1>No Tours left</h1>
        <button className='refresh-content' onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}
