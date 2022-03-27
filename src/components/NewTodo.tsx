import { useRef, useContext } from "react";
import { TodosContext } from "../store/todo-context";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (events: React.FormEvent) => {
    events.preventDefault();
    const enteredValue = todoInputRef.current!.value;

    if (enteredValue.trim().length === 0) {
      //throw an Error
      return;
    }
    todosCtx.addTodo(enteredValue);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">What todo?</label>
      <input type="text" id="text" ref={todoInputRef}></input>
      <button>Submit</button>
    </form>
  );
};
export default NewTodo;
