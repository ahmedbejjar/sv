import React, { Component } from 'react'

export default class Addnewtask extends Component {
  handelSubmit=(e)=>{
    e.preventDefault()
    const newOBJ={
      id:Math.random(),action:this.props.newAction,isDone:false

    }
    this.props.handelAdd(newOBJ)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit} >
            <input type="text" value={this.props.newAction} onChange={e=>this.props.handelChange(e.target.value)}/>
            <button type='submit' >add</button>
        </form>
      </div>
    )
  }
}
