import './App.css';
import Todos from './components/todos'; 
import todo from './models/todo';
function App() {
  const todos = [
  new todo('React Typescript'),
  new todo('Items of typeScript')
  ];
  return (
    <div >
      <Todos items={todos}/>
    </div>
  );
}

export default App;
