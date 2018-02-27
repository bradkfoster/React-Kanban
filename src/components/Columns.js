import React from 'react';
import Done from './Done';
import Progress from './Progress';
import Queue from './Queue';


const Column = (cards) => {
 
  return (
    <div className="ColDiv">
     <Queue cards={cards}/>
      <Progress card={cards}/> 
     <Done cards={cards}/>

    </div>
  )
}

export default Column;
