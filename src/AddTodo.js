import React, { Component } from 'react'

class AddTodo extends Component {
  
    state = {
      content: ''
    }
    //Manejador de Cambio 
    handleChange = (e) => {
      this.setState({
        content: e.target.value
      })
    }
    //Manejador de Envío
    handleSubmit = (e) => {
      e.preventDefault();
     this.props.addTodo(this.state)
     this.setState({
       content: ''
     })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>¡Agregá una nueva tarea y presiona Enter!</label>
          <input type="text" onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    )
  }
}

export default AddTodo