import React, { Component } from 'react'
import Taskcard from './Taskcard'

export default class Tasklist extends Component {
  render() {
    return (
      <div>
        {
            React.Children.toArray(
                this.props.list.map(el=><Taskcard task={el} deleteFunction={this.props.deleteFun} completetask={this.props.completetask}/>)


            )
        }
      </div>
    )
  }
}
