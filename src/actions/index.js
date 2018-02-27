import axios from 'axios';
export const GET_CARDS = "GET_CARD";
export const ADD_CARD = "ADD_CARD";




export const getCards = ()=>{
  
  return dispatch => {
    return axios.get('/api/cards')
    .then(result=>{
     
      return result.data
    })
    .then(result=>{
    
      dispatch({
        type:GET_CARDS,
        cards:result
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
}

export const addCard = (card) =>{
  console.log('in ADD function')
  console.log(card)
  return dispatch =>{
    return axios.post('/api/cards',card)
    .then(result=>{
      if(!result){
        console.log('Card could not be add')
      }
      return getCards()(dispatch)
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
