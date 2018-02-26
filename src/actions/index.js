import axios from 'axios';
import thunk from 'redux-thunk';

export const GET_CARDS = "GET_CARD";
export const ADD_CARD = "ADD_CARD";

const cardlist = '/api';


export const getCards = ()=>{
  
  return dispatch => {
    return axios.get('/api/cards')
    .then(result=>{
     
      return result.data
    })
    .then(result=>{
      console.log('result get',result);
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
  return dispatch =>{
    return axios.post('/api/cards',card)
    .then(result=>{
      console.log(result)
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
