import React, { Component } from 'react';
import './App.css';
import Ul from './Ul/Ul';


class App extends Component {
  constructor () {
    super()
    this.state = {
      tasks : [
        {id:1, toDo: "Plant a kid", done:false},
        {id:2, toDo: "Write a tree", done:false},
        {id:3, toDo: "Have a book", done:false}
      ]
    }
  }

  render () {
    return (
      <div className="App">
        <h1>To-do List</h1>
        <div>
          <Ul tasks = {this.state.tasks}></Ul>
        </div>
      </div>
    );
  }
  
}

export default App;
