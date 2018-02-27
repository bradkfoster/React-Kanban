import React from 'react';
import Card from './Card';

const Done = ({cards }) => {

 
 
 let status=  cards.cards.filter((card)=>{
   
   return card.status === 'low'
 })

 
 
 

  return (
    <div className="doneDiv">
      <h1 className='divTitle'>Done</h1>
      <Card cards={status}/>
      
    </div>
  )
}

export default Done;