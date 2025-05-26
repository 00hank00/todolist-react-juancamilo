import { useEffect, useState } from 'react';
import './App.css';
import { Task } from './Task';
import todoService from './todo-service';

const TODO_LIST = [
  { label: 'Ir a la playa' },
  { label: 'Cheking en el hotel' },
  { label: 'Reservar en restaurante' },
];

const INPUT_DEFAULT_VALUE = '';

function App() {
  const [input, setInput] = useState(INPUT_DEFAULT_VALUE);
  const [todoList, setTodoList] = useState([]);
  
useEffect(() => {
  const loadInitialValues = async () => {
    const todoList = await todoService.getTodolist();
    setTodoList(todoList);
  };
  loadInitialValues();
}, []);

  const handleAddTask = () => {
    if (input) {
      setTodoList([...todoList, { label: input }]);
      setInput(INPUT_DEFAULT_VALUE);
    }
  };

  const handleDelete = (id) => {
    const filteredTodoList = todoList.filter((task, index) => index !== id)
    setTodoList(filteredTodoList)
  };

  return (
    <>
    
      <main id="todolist">
        <h1>
          Vacations List
          <span>Welcome Summer</span>
        </h1>
        <div className='add-Iput'>
        <input className='input-Todolist'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='todolist-Boton' onClick={handleAddTask}>Add</button>
        </div>
        <ul>
          {todoList.map((task, index) => (
            <Task label={task.label} handleDelete={handleDelete} key={index} id={index} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
