import React, { Component } from 'react';
import '../index.css';
import {connect} from 'react-redux';
import Header from '../components/header'
import Done from '../components/Done'
import Queue from '../components/Queue'
import Progress from '../components/Progress';
import thunk from 'redux-thunk';
import {getCards} from '../actions'
import {addCard} from '../actions'
import AddForm from '../components/AddCardForm';









class App extends Component {
 constructor(props){
   super(props)
console.log('this.props', this.props.addCard)
   
 }

 componentWillMount() {
  this.props.getCards();
  
}
  render() {
    return (
      <div className="App">
        
        <Header className="header"/>
        <Queue className= 'queueCol' cards={this.props.cards}/>
        <Done className='doneCol'/>
        <Progress />  <AddForm addCard= {this.props.addCard}/>      
      </div>
    );
  }
}


const mapStateTopProps = state =>{
 
  return{
    cards:state.cards.cards
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getCards: ()=>{
      dispatch(getCards())
    },
    addCard: () =>{
      dispatch(addCard());
    }
  }
}


const ConnectedApp = connect (
  mapStateTopProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
