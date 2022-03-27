import React, { useState } from "react";

import todo from "../models/todo";
type todoConetxtObj = {
  items: todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
export const TodosContext = React.createContext<todoConetxtObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});
const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<todo[]>([]);
  const onAddTodoHandler = (todoText: string) => {
    const newtodo = new todo(todoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(newtodo);
    });
  };
  const onRemoveTodoHandler = (id: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };
  const todoContextValue: todoConetxtObj = {
    items: todos,
    addTodo: onAddTodoHandler,
    removeTodo: onRemoveTodoHandler,
  };
  return (
    <TodosContext.Provider value={todoContextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
