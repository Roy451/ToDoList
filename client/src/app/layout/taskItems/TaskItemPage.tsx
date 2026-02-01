// TaskItemsPage.tsx
import { useState } from 'react';
import { Typography, Dialog, DialogContent, Box, CssBaseline } from '@mui/material';
import { useTaskItems } from '../../../lib/hooks/useTaskItems';
import NavBar from '../../../app/layout/NavBar';
import TaskItemDashboard from './dashboards/TaskItemDashboard';
import TaskItemForm from '../../../features/TaskItems/form/TaskItemForm';
import TestErrors from '../../../features/errors/TestErros';

export default function TaskItemsPage() {
    const [openForm, setOpenForm] = useState(false);
    const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);

    const { taskItems, isPending } = useTaskItems();

    const handleAddTask = () => {
        setSelectedTask(null);
        setOpenForm(true);
    };

    const handleEditTask = (task: TaskItem) => {
        setSelectedTask(task);
        setOpenForm(true);
    };

    return (
        <Box sx={{ bgcolor: '#eeeeee', height: 'auto' }}>
            <CssBaseline />
            <NavBar onAddTask={handleAddTask} />
            <Box sx={{ maxWidth: 900, width: '100%', mx: 'auto', mt: 3, pb: 5 }}>
                {!taskItems || isPending ? (
                    <Typography>Loading...</Typography>
                ) : (

                    <TaskItemDashboard
                        //taskItems={taskItems!}
                        //submitForm={handleSubmitForm}
                        onEditTask={handleEditTask}
                        //deleteTaskItem={handleDeleteTaskItem}
                        //markTaskCompleted={markTaskCompleted}
                    />
                )}
            </Box>


            {/* The Dialog had this [ onClose={() => setOpenForm(false)} ] but maybe i don't need this */}
            <Dialog open={openForm} maxWidth="sm" fullWidth>
                <DialogContent>
                    <TaskItemForm
                        task={selectedTask}
                        setOpen={setOpenForm}
                        //submitForm={handleSubmitForm}
                    />
                </DialogContent>
            </Dialog>


            <TestErrors /> {/* Remove Later */}
        </Box>

    );
}
