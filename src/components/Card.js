import React from 'react';

const Card = ({cards}) => {
 


return (

  <div>
    {
      cards.map((elem,ind)=>{
          
        return (
          <div  className="card" key={ind}>
            {elem.title}
            <br/>
            {elem.priority}
            <br/>
            {elem.assigned_to}

          </div>
        )
      })
    }
  </div>
)

}

export default Card;