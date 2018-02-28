import React, { Component } from 'react';
import '../index.css';
import {connect} from 'react-redux';
import Header from '../components/header'
import Column from '../components/Columns';
import Card from '../components/Card'
import {getCards} from '../actions'
import {addCard} from '../actions'
import AddForm from '../components/AddCardForm';









class App extends Component {
 constructor(props){
   super(props)
   this.cardClickHandler = this.cardClickHandler.bind(this);
   
 }

 componentWillMount() {
  this.props.getCards();

  
  
}

cardClickHandler() {
 console.log('click ')
}
  render() {
    return (
      <div className="App">
        
        <Header className="header"/>
        <AddForm addCard= {this.props.addCard}/> 
        <Column cards={this.props.cards}/>
        {/* <Queue className= 'queueCol' cards={this.props.cards}/>
        
        <Progress />   */}
       <Card clickHandler = {this.cardClickHandler}/>      
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
