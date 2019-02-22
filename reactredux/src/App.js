import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

import AddTodo from './components/AddTodo';//引入组件
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';


class App extends Component {
  render() {
    return (
      <div>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
        <FilterTodo></FilterTodo>
      </div>
    );
  }
}

App = connect()(App)
export default App;
