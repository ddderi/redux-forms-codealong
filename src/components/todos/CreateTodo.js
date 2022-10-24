import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addTodo } from ""

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: "enculado", payload: this.state})
    this.setState({
      text: ''
    })
  }

  handleChange = (event) => {
    const { value } = event.target

    this.setState({
      text: value
    });
    console.log(this.state)
  };



  render() {

    // const [todos] = this.props



    return (
      <div>
        {console.log(this.props.todos)}
        <form onSubmit={this.handleSubmit} >
          <input onChange={this.handleChange} 
          value={this.state.text}
          type="text" 
          placeholder="add todo" />
          <input type="submit" />
        </form>
        <ul>
        {this.props.todos.length>0 ? this.props.todos.map((todo, index) => {return <li key={index}>{todo.text}</li>})  : <h1>Nothing to do</h1>}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (formData) => dispatch({type: "ADD_TODO", payload: formData})
    }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}


export default connect(mapStateToProps)(CreateTodo);
