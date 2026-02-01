// import { useState } from 'react'
// import { Box, CssBaseline, Dialog, DialogContent, Typography } from '@mui/material';
// import NavBar from './NavBar';
// import TaskItemDashboard from './taskItems/dashboards/TaskItemDashboard';
// import TaskItemForm from '../../features/TaskItems/form/TaskItemForm';
// import { useTaskItems } from '../../lib/hooks/useTaskItems';
// import TestErrors from '../../features/errors/TestErros';


// function App() {

//   //const [taskItems, setTaskItems] = useState<TaskItem[]>([]);
//   const [openForm, setOpenForm] = useState(false);
//   const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);

//   const { taskItems, isPending } = useTaskItems();


//   const handleAddTask = () => {
//     setSelectedTask(null);  // new task
//     setOpenForm(true);
//   };


//   const handleEditTask = (task: TaskItem) => {
//     setSelectedTask(task);
//     setOpenForm(true);
//   };


//   // const markTaskCompleted = (id: string) => {
//   //   // setTaskItems(taskItems => taskItems.map( taskItem =>
//   //   //     taskItem.id === id ? { ...taskItem, isCompleted: true } : taskItem
//   //   //   )
//   //   // );

//   //   taskItems!.map(taskItem =>
//   //     taskItem.id === id ? { ...taskItem, isCompleted: true } : taskItem
//   //   )

//   //   console.log(id);
//   // };


//   return (

//     <Box sx={{ bgcolor: '#eeeeee', height: 'auto' }}>
//       <CssBaseline />
//       <NavBar onAddTask={handleAddTask} />
//       <Box sx={{ maxWidth: 900, width: '100%', mx: 'auto', mt: 3, pb: 5 }}>
//         {!taskItems || isPending ? (
//           <Typography>Loading...</Typography>
//         ) : (

//           <TaskItemDashboard
//             //taskItems={taskItems!}
//             //submitForm={handleSubmitForm}
//             onEditTask={handleEditTask}
//             //deleteTaskItem={handleDeleteTaskItem}
//             //markTaskCompleted={markTaskCompleted}
//           />
//         )}
//       </Box>


//       {/* The Dialog had this [ onClose={() => setOpenForm(false)} ] but maybe i don't need this */}
//       <Dialog open={openForm} maxWidth="sm" fullWidth>
//         <DialogContent>
//           <TaskItemForm
//             task={selectedTask}
//             setOpen={setOpenForm}
//           //submitForm={handleSubmitForm}
//           />
//         </DialogContent>
//       </Dialog>


//       <TestErrors /> {/* Remove Later */}
//     </Box>

//   )
// }

// export default App;








{ 
  /* 
     The Original [<App />] class is Above ^^^^
     If theres an error just uncommentt it and deleter the one below VVV.
     If you do that then you dont need the [<TaskItemPage />] 
  */
}

import { Outlet } from 'react-router';

function App() {

  return (
    <>
      <Outlet />   
    </>

  )
}

export default App;
