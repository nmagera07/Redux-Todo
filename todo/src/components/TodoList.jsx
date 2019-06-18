import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from '../actions';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

 class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

   handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

   addTodo = e => {
    e.preventDefault();
    const newTodo = {
      id: (this.props.todos.length - 1) + 1,
      value: this.state.newTodo,
      completed: false
    }

     this.props.addTodo(newTodo);
    this.setState({ newTodo: '' })
  }

   toggleComplete = (e, id) => {
    e.preventDefault();

     this.props.toggleComplete(id);
  }

   deleteTodo = (e, id) => {
    e.preventDefault();

     this.props.deleteTodo(id);
  }

   render() {
    const todoItem = this.props.todos.map(todo => (

    <div>
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={this.toggleComplete}
        deleteTodo={this.deleteTodo}
      />
      </div>
    ));

     return (
      <div className="app">
          <nav>
              <div className="nav-items">
                <a>Home</a>
                <h1>Redux Todo App!</h1>
                <a>About Us</a>
            </div>
          </nav>
        <TodoForm
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          newTodo={this.state.newTodo}
        />

         <ul style={{ listStyle: 'none' }}>
             <div >
                 {todoItem}
            </div>
        </ul>
      </div>
    );
  }
}

 const mapStateToProps = state => {
  console.log(state.todos)
  return {
   
    todos: state.todos
  }
}

 export default connect(mapStateToProps, { addTodo, toggleComplete, deleteTodo })(TodoList);