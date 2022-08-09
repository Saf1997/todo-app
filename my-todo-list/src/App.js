import './App.css';
import './TodoList'
import TodoAdd from './TodoListFunctions'
import TodoList from './TodoList'
import TodoListFunctions from './TodoListFunctions';


function App() {
  return (
    <div className="App">
      <div className="main-background">
        <div className="todo-title">
        <p id="title">
          My Todo List
        </p>
        </div>
        <div className="main-app">
        <section className="todo-function">
          <p id="todo-instruction"> Add, edit and delete todo items  </p>
         <TodoListFunctions> hello </TodoListFunctions>
        </section> 
        <TodoList> </TodoList>
        </div>
      </div>
    </div>
  );
}

export default App;
