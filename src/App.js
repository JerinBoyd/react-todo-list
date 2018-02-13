import React, { Component } from 'react';
// import './App.css';



class App extends Component {
  constructor(){
    super()
    this.state = {
      todosInput:'',
      todos: [
      ]
    }
    this.resetList = this.resetList.bind(this)

    
    
  }

  addTodo(){
    const todosValue = this.state.todosInput // had sooooooo much trouble finding the correct sequence 

    
    const newTodos = [...this.state.todos, todosValue]
     

    
    this.setState({
      todos: newTodos, 
      todosInput: ''
    })
    

  
    

  }
  resetList(){
    this.setState({todos: []})
  }


  render() {
    return (
       <div >
         <h1>List ToDo</h1>
         <p>Todo's Count: {this.state.todos.length}</p>
         <ul>
           { this.state.todos.map((todo, index) => {
                return (<li key={index}>{todo}</li>)
                
           })}
         </ul>
         <input type="text" placeholde='Enter Todo' value={this.state.todosInput} 
                onChange={(e) => this.setState({todosInput: e.target.value})} />
         <button onClick={this.addTodo.bind(this)}>Add</button>
         <div>
         <button label="Reset" onClick={this.resetList}>Reset </button>
         </div>
         



       </div>
    );
  }
}

export default App;
