import { useEffect, useState } from 'react';
import './App.css';
import { Task } from './Task';
import todoService from './todo-service';


const INPUT_DEFAULT_VALUE = '';

function App() {
  const [input, setInput] = useState(INPUT_DEFAULT_VALUE);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const loadInitialValues = async () => {
      const todoList = await todoService.getTodoList();
      setTodoList(todoList);
    };
    loadInitialValues().then();
  }, []);

const handleAddTask = async () => {
  if (input) {
   
    setTodoList([...todoList, { label: input }]);
    setInput(INPUT_DEFAULT_VALUE);
 
    const username = "juanca"; 
    
    try {
      await fetch(`https://playground.4geeks.com/todo/todos/${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          label: input,
          is_done: false
        })
      });
    } catch (error) {
      console.error("Error al agregar la tarea al servidor:", error);
    }
  }
};


  const handleDelete = (id) => {
    const filteredTodoList = todoList.filter((task, index) => index !== id)
    setTodoList(filteredTodoList)
  };

const handleClearAll = async () => {
  try {
    await Promise.all(
      todoList.map(todo =>
        fetch(`https://playground.4geeks.com/todo/todos/${todo.id}`, {
          method: 'DELETE'
        })
      )
    );

    setTodoList([]);
    console.log("Todas las tareas han sido eliminadas.");
  } catch (error) {
    console.error("Error al eliminar todas las tareas:", error);
  }
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
        <button className='clearAll-boton' onClick={handleClearAll}>Clear All</button>

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
