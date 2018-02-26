import axios from 'axios';
import {GET_CARDS} from '../actions/index'



const initialState = {
  nextId: 4,
  cards: [
    // {id: 1, title: "cook rice", priority: "high", status: "Queue", created_by: "brad"}
    // ,
    // {id: 2, title: "Finish Kan Ban", priority: "high", status: "low", created_by: "brad"}
  ]
}


export default(state = initialState, action = {}) =>{
  switch(action.type){
   case GET_CARDS:
   return { ...state, cards: action.cards };
    
    default:
    return state;
  }
}