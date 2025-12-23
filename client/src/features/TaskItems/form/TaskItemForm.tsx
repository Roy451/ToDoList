import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";


type Props = {
  task?: TaskItem | null;
  setOpen: (formOpen: boolean) => void;
  submitForm: (taskItem: TaskItem) => void;
}


export default function TaskItemForm({task, setOpen, submitForm}: Props) {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: {[key: string]: FormDataEntryValue} = {};
    formData.forEach((value, key) => {
      // The [key] will be the [name] from the [<TextField />]. And the [value] will be the [defaultValue]
      // Example --> [key] will be ['title'] so the [Property] ['title'] of the [task] it's [value] will be [defaultValue].
      data[key] = value;
    });

    if (task) data.id = task.id;

    submitForm(data as unknown as TaskItem);
  }

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {task ? "Edit TaskItem" : "Create TaskItem"}
      </Typography>
      <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
        <TextField name='title' label='Title' defaultValue={task?.title} />
        <TextField name='category' label='Category' defaultValue={task?.category}  />
        <TextField name='dateAdded' label='Date' type="date" defaultValue={task?.dateAdded} />
        {/* <TextField name='Is Completed' label='Is Completed' defaultValue={task?.isCompleted}  /> */}
        <Box display='flex' justifyContent='end' gap={3}>
          <Button onClick={() => setOpen(false)} color='inherit'>Cancel</Button>
          <Button type="submit" color='success' variant="contained">Submit</Button>
        </Box>
      </Box>
    </Paper>
  )
}