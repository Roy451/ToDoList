import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/taskItems')
      .then(response => response.json())
      .then(data => setTaskItems(data))
  }, [])

  return (

    <>
      <h3>ToDoList</h3>
      

      <ul>
        {taskItems.map((taskItem) => (
          <li key={taskItem.id}>{taskItem.title}</li>
        ))}
      </ul>
    </>

  )
}

export default App
