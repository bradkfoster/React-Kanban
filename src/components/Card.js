import React from 'react';

const Card = ({card}) => {
  console.log('CARDS',card)

return (
  <div>
    {
      card.map((elem)=>{
          
        return (
          <div className="card">
            {elem.title}
          </div>
        )
      })
    }
  </div>
)

}

export default Card;