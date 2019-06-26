import React from "react";


 const TodoForm = props => {
     console.log(props.newTodo)
  return (
    <form onSubmit={props.addTodo}>
      <input
        type="text"
        placeholder="Add new todo"
        onChange={props.handleChange}
        name="newTodo"
        value={props.newTodo}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

 export default TodoForm;
