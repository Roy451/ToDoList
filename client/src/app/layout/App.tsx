import { useEffect, useState } from 'react'
import { Box, CssBaseline, Dialog, DialogContent } from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import TaskItemDashboard from './taskItems/dashboards/TaskItemDashboard';
import TaskItemForm from '../../features/TaskItems/form/TaskItemForm';

function App() {

  const [taskItems, setTaskItems] = useState<TaskItem[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);


  useEffect(() => {
    axios.get<TaskItem[]>('https://localhost:5001/api/taskItems')
      .then(response => setTaskItems(response.data))
  }, [])



  const handleSubmitForm = (taskItem: TaskItem) => {
    if (taskItem.id) {
      setTaskItems(taskItems.map(x => x.id === taskItem.id ? taskItem : x));
    } else {
      const newTaskItem = { ...taskItem, id: taskItems.length.toString() };
      //setSelectedTask(newTaskItem);
      setTaskItems([...taskItems, newTaskItem]);
    }
    setOpenForm(false); // close after submit
  }


  const handleAddTask = () => {
    setSelectedTask(null);  // new task
    setOpenForm(true);
  };


  const handleEditTask = (task: TaskItem) => {
    setSelectedTask(task);
    setOpenForm(true);
  };


  const handleDeleteTaskItem = (id: string) => {
    setTaskItems(taskItems.filter(x => x.id !== id));
  };


  const markTaskCompleted = (id: string) => {
    setTaskItems(taskItems => taskItems.map( taskItem =>
        taskItem.id === id ? { ...taskItem, isCompleted: true } : taskItem
      )
    );
  };


  return (

    <Box sx={{ bgcolor: '#eeeeee', height: '100vh' }}>
      <CssBaseline />
      <NavBar onAddTask={handleAddTask} />
      <Box sx={{ maxWidth: 900, width: '100%', mx: 'auto', mt: 3 }}>
        <TaskItemDashboard
          taskItems={taskItems}
          //submitForm={handleSubmitForm}
          onEditTask={handleEditTask}
          deleteTaskItem={handleDeleteTaskItem}
          markTaskCompleted={markTaskCompleted}
        />
      </Box>


      {/* The Dialog had this [ onClose={() => setOpenForm(false)} ] but maybe i don't need this */}
      <Dialog open={openForm} maxWidth="sm" fullWidth>
        <DialogContent>
          <TaskItemForm
            task={selectedTask}
            setOpen={setOpenForm}
            submitForm={handleSubmitForm}
          />
        </DialogContent>
      </Dialog>

    </Box>

  )
}

export default App
