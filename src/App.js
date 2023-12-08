import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Tasklist from './components/Tasklist';
import Addnewtask from './components/Addnewtask';

export default class App extends Component {
  state={
    todos:[
      {id:Math.random(),action:"wake up",isDone:true},
      {id:Math.random(),action:"Go Out",isDone:false},

    ],
    newAction:""
  }
  handleDelete=(THIED)=>{this.setState({todos:this.state.todos.filter(el=>el.id!==THIED)})}


  handleComplete=(ID)=>{
  this.setState({todos:this.state.todos.map(el=>el.id===ID?{...el,isDone:!el.isDone}:el)})}
handelChange=(x)=>this.setState({newAction:x})
handelAdd=(newTask)=>this.setState({todos:[...this.state.todos,newTask]})
  render() {
    return (
      <div>
        <Addnewtask newAction={this.state.newAction} handelChange={this.handelChange} handelAdd={this.handelAdd} />
        <Tasklist list={this.state.todos} deleteFun={this.handleDelete} completetask={this.handleComplete}></Tasklist>
      </div>
    )
  }
}
