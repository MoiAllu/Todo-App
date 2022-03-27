import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/todos'; 
import todo from './models/todo';
import {useState} from 'react';

function App() {
  const [todos,setTodos]=useState<todo[]>([]);
  const onAddTodoHandler=(todoText:string)=>{
    const newtodo =new todo(todoText);
    setTodos((prevTodo)=>{
      return prevTodo.concat(newtodo);
    })
  }
  return (
    <div >
      <NewTodo onAddTodo={onAddTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
