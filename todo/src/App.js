import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { connect } from 'react-redux'



class List extends React.Component {
  
  toggleItem = id => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    });
  };

  // addTodo = itemName => {
  //   // add an item from the form to our list
  //   const newItem = {
  //     task: itemName,
  //     id: Date.now(),
  //     purchased: false
  //   };
  //   this.setState(prevState => {
  //     return {
  //       tasks: [...prevState.tasks, newItem]
  //     };
  //   });
  // };

  deleteItem = () => {
    this.setState(prevState => {
      return { tasks: prevState.tasks.filter(task => !task.completed) };
    });
  };

  deleteAll = () => {
    this.setState(prevState => {
      return { tasks: []}
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm deleteItem={this.deleteItem} deleteAll={this.deleteAll}/>
        </div>
        <TodoList taskItems={this.props} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(List);

