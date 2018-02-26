import React, {Component} from 'react';


class AddForm extends Component {
  constructor(addCard){
    
    super(addCard)
    this.state = {
      title: '',
      priority: '',
      created_by:'',
      assigned_to: ''
    }
 
  
  }
  handleChangeTitle(event){
    this.setState({title: event.target.value})
   
  }
  handleChangepriority(event){
    this.setState({priority: event.target.value})
  }
  handleChangecreatedby(event){
    this.setState({created_by: event.target.value})
  }
 handleChangeassignedby(event){
    this.setState({assigned_to: event.target.value})
  }

  handleSubmit(event){
    
    
    event.preventDefault()
    let newCard ={
      title:this.state.title,
      priority:this.state.priority,
      created_by:this.state.created_by,
      assigned_to:this.state.assigned_to
    }
    
   

}
  
  
render(){
return (
      <div>
        <form onSubmit ={this.handleSubmit.bind(this)}>
          Title : 
          <input type="text"
          onChange={this.handleChangeTitle.bind(this)}/>
          <br/>
          <br/>
          Priority :
          <input type="text"
          onChange={this.handleChangepriority.bind(this)}/>
          <br/>
          <br/>
          Name :
          <input type="text"onChange={this.handleChangecreatedby.bind(this)}/>
          <br/>
          <br/>
          Assign To :
          <input type="text"
          onChange={this.handleChangeassignedby.bind(this)}/>
          <br/>
          <br/>
          <input type="submit" value="submit" />
        </form> 
      </div> 
  )
}
}




export default AddForm;