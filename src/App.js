import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todo: []

    }
    this.todoInput = 
  }
  addTodo(){

  }

  render() {
    return (
       <div>
         <h1>ToDo List</h1>
         <p>List Count: {this.state.todo.length}</p>
         <ul>
           <li>Sample</li>
         </ul>
         <input type="text" placeholde='Enter ToDo' />
         <button>Add</button>



       </div>
    );
  }
}

export default App;
