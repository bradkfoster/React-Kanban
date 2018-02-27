import React from 'react';

const Card = ({cards}) => {
  console.log(cards.cards)

return (

  <div>
    {
      cards.cards.map((elem)=>{
          
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