import React from 'react';
import Card from './Card';
const Queue = ({cards}) => {



  return (
  <div className="queDiv">
      <h1>Queue</h1>
        <Card card={cards}/>
   </div>
  )
}

export default Queue;