import React from 'react';
import Card from './Card';




// class Queue extends Component {
//   constructor(props){
//     super(props)
 
    
//   }
 
  
//    render() {
//      console.log(this.props)
//      return (
//        <div className="que">
        
        
//        </div>
//      );
//    }
//  }
 
 
// const mapStateTopProps = state =>{
 
//   return{
//     cards:state.cards.cards
//   }
// }

// const mapDispatchToProps = dispatch =>{
//   return{
//     getCards: ()=>{
//       dispatch(getCards())
//     },
//     addCard: () =>{
//       dispatch(addCard());
//     }
//   }
// }


// const ConnectedApp = connect (
//   mapStateTopProps,
//   mapDispatchToProps
// )(Queue)

// export default ConnectedApp;

 


const Queue = ({cards}) => {




  return (
    
  <div className="queDiv">
      <h1 className='divTitle'>Queue</h1>
      {
        cards.cards.filter((cards)=>{
          return cards.status === 'Queue'
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

export default Queue;