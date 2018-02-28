import React from 'react';



  



const Card = ({id,title,priority,created,clickHandler}) => {
 


return (

  <div id={id} className='card'>
    {
      <span>{title}
      <br/>
      {priority}
      <br/>
      {created}
      </span>
      
       }
      <button onClick={clickHandler}>button</button>
  </div>
)



}

export default Card;