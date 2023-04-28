import React, { Component } from 'react';
import TodoApp from './components/todo/TodoApp'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         {/* <Counter/> */}
         <TodoApp/>
      </div>
    );
  }
}

export default App;