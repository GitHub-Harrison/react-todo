import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleTodo }) {
  return (
    // loops over the todo array
    todos.map(todo => {
      return <Todo key={todo.id}  toggleTodo={toggleTodo} todo={todo} />
    })
  )
}