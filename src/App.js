import { useState } from 'react';
import { ToDoForm } from './ToDoForm';
import { ToDo } from './ToDo';
import './App.css'
 
 

function App() {

  const [array, setArray] = useState([])

  const addTask = todoItem => {
    if(todoItem) {
      const newItem = {
        id: Math.round(Math.random() * 100),
        text: todoItem,
        complete: false
      }
      setArray([...array, newItem]);
    }
  }

  const removeTask = id => {
    setArray([...array.filter(item => item.id !== id)])
  }

  const handleComplete = id => {
    setArray([
      ...array.map(todo => (
        todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
      ))
    ])
  }
 
  return (
    <div className="App">
      <header>
        <h1>Список задач: {array.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {
        array.map(item => {
          return (
            <ToDo 
              key={item.id} 
              todo={item}
              removeTask={removeTask}
              handleComplete={handleComplete} 
            />
          )
        })
      }
    </div>  
  ) 
}

export default App;
