import { useEffect, useState } from 'react'
import './App.css'
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

function App() {

  const [taskItems, setTaskItems] = useState<TaskItem[]>([]);

  useEffect(() => {
    axios.get<TaskItem[]>('https://localhost:5001/api/taskItems')
      .then(response => setTaskItems(response.data))
  }, [])

  return (

    <>
      <Typography variant='h3'>ToDo List</Typography>
      <List>
        {taskItems.map((taskItem) => (
          <ListItem key={taskItem.id}>
            <ListItemText>{taskItem.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>

  )
}

export default App
