import { useSelector } from "react-redux";
import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (<TodoItem key={todo.id} {...todo} />))}
    </ul>
  );
}

export default TodoList;
