import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';



type Props = {
    taskItems: TaskItem[];
    //submitForm: (taskItem: TaskItem) => void;
    onEditTask: (task: TaskItem) => void;
    deleteTaskItem: (id: string) => void;
    markTaskCompleted: (id: string) => void;
}


export default function TaskItemDashboard({ taskItems, onEditTask, deleteTaskItem, markTaskCompleted }: Props) {


    return (
        <>
            <TableContainer component={Paper}>
                {/* Maybe Delete the size="small" aria-label="a dense table" */}
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Date Added</TableCell>
                            <TableCell align="right">Is Completed</TableCell>
                            <TableCell align="center">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taskItems.map((row) => (
                            <TableRow
                                key={row.dateAdded}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.title}</TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right">{row.dateAdded}</TableCell>

                                <TableCell
                                    align="right"
                                    sx={{
                                        color:
                                            row.isCompleted
                                                ? "green"
                                                : new Date(row.dateAdded) < new Date()
                                                    ? "red"
                                                    : "inherit",
                                        fontWeight:
                                            !row.isCompleted && new Date(row.dateAdded) < new Date()
                                                ? "bold"
                                                : "normal"
                                    }}
                                >
                                    {row.isCompleted
                                        ? "Yes"
                                        : new Date(row.dateAdded) < new Date()
                                            ? "Past Due"
                                            : "No"}
                                </TableCell>

                                <TableCell key={row.id} align="right">
                                    <IconButton onClick={() => onEditTask(row)} aria-label="EditIcon">
                                        <EditIcon />
                                    </IconButton>

                                    <IconButton onClick={() => deleteTaskItem(row.id)} color="error" aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>

                                    <Button
                                        variant="contained"
                                        sx={{
                                            minWidth: 0, // removes default button min width
                                            padding: '6px', // controls spacing
                                            backgroundColor: '#4caf50',
                                            borderRadius: '2px',
                                            '&:hover': { backgroundColor: '#388e3c' },
                                            ml: 1
                                        }}
                                        onClick={() => markTaskCompleted(row.id)}
                                    >
                                        <CheckIcon fontSize="small" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    )
}