import React, { Component } from 'react'

export default class Taskcard extends Component {
  render() {
    console.log(this.props)
    return (
      <div id={this.props.task.isDone?"complete":null}>
        <h1>{this.props.task.action}</h1>
        <button onClick={()=>this.props.deleteFunction(this.props.task.id)}>delete</button>
        <button onClick={()=>this.props.completetask(this.props.task.id)}>complete</button>
      </div>
    )
  }
}
