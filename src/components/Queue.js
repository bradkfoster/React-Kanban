import React from 'react';
import Card from './Card';
const Queue = ({cards}) => {

let status = cards.cards.filter((card)=>{
  return card.status === 'Queue'
})

console.log('que',status);
console.log('card',cards)


  return (
    
  <div className="queDiv">
      <h1 className='divTitle'>Queue</h1>
        <Card cards={status}/>
   </div>
  )
}

export default Queue;