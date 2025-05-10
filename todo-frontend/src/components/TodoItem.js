import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li>
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
