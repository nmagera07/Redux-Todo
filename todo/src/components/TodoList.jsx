import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props);
  return (
    <div className="shopping-list">
      {props.taskItems.todos.map(item => {
        return <Todo key={item.id} item={item} />;
      })}
    </div>
  );
};

export default TodoList;