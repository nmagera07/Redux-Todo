import React from "react";
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions'
class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.item);
    this.setState({
      item: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}
            placeholder="Enter Todo Item"
          />
          <button>Add Todo</button>
        </form>
        <div className="btn">
        <button onClick={this.props.deleteItem} >
          Clear Completed
        </button>
        <button onClick={this.props.deleteAll}>Clear All</button>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    { addTodo, toggleTodo} )(TodoForm);
