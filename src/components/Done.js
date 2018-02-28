import React from 'react';
import Card from './Card';

const Done = ({cards }) => {

 
 


 
 
 

  return (
    
    <div className="queDiv">
        <h1 className='divTitle'>Queue</h1>
        {
          cards.cards.filter((cards)=>{
            return cards.status === 'low'
          })
          .map((cards,ind)=>{
            return (
              <Card
              key = {ind}
              id = {cards.id}
              title={cards.title}
              priority={cards.priority}
              created = {cards.created_by}
  
              />
            )
          })
        }
        
          
     </div>
    )
}

export default Done;