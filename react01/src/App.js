import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
//import './assets/css/App.css';
import Home from './components/Home';
import News from './components/News';
import Todolist from './components/Todllist'
import ReactForm from './components/ReactForm'
import Axios from "./components/Axios"
import FetchJsonp from './components/FetchJsonp'


class App extends Component {
  constructor(props){
    super(props)
  }



  render() {
    return (
      <div className="App">
      <Home></Home>
      <hr/>
      <Todolist></Todolist>
      <hr/>
      <ReactForm></ReactForm>
      <hr/>
      <News></News>
      <hr/>
      <h3>Axios插件获取服务器数据</h3>
      <Axios></Axios>
      <h3>FetchJsonp插件获取服务器数据</h3>
      <FetchJsonp></FetchJsonp>
      </div>
    );
  }
}

export default App;
