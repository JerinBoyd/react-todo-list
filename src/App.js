import React, { Component } from 'react';



class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: [
      ]
    }
    this.resetList = this.resetList.bind(this)

    
    this.todosInput = ''
  }

  addTodo(){
    const todosValue = this.todoInput.value // had sooooooo much trouble finding the correct sequence 

    
    const newTodos = this.state.todos
    newTodos.push(todosValue)

    
    this.setState({
      todos: newTodos
    })
    
    this.todoInput.value = ''

    this.todoInput.focus()
    

  }
  resetList(){
    this.setState({todos: []})
  }

  render() {
    return (
       <div>
         <h1>List ToDo</h1>
         <p>Todo's Count: {this.state.todos.length}</p>
         <ul>
           { this.state.todos.map((todo, index) => {
                return (<li key={index}>{todo}</li>)
                
           })}
         </ul>
         <input type="text" placeholde='Enter Todo' ref={(input) => this.todoInput = input} />
         <button onClick={this.addTodo.bind(this)}>Add</button>
         <div>
         <button label="Reset" onClick={this.resetList}>Reset </button>
         </div>
         



       </div>
    );
  }
}

export default App;
