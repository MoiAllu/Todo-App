import TodoItem from "./todoItem";
import classes from './todos.module.css';
import { useContext } from "react";
import { TodosContext } from "../store/todo-context";
const Todos: React.FC =()=> {
    const todoCtx=useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem  key={item.id} text={item.text} onRemoveTodo={todoCtx.removeTodo.bind(null,item.id)}/>
      ))}
    </ul>
  );
};
export default Todos;
