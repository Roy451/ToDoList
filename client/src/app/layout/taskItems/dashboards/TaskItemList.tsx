import { Button, IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
//////////////////////////////////////////////////////////////////////////////////////////////
//                              ------NOT IN USE-------
//////////////////////////////////////////////////////////////////////////////////////////////

type Props = {
    taskItems: TaskItem[];
    handleEditClick: (taskItem: TaskItem) => void;
}

export default function TaskItemList({ taskItems, handleEditClick }: Props) {
    return (
        <>
            {taskItems.map((row) => (
                <TableRow
                    key={row.dateAdded}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">{row.title}</TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                    <TableCell align="right">{row.dateAdded}</TableCell>
                    <TableCell align="right">{row.isCompleted} false</TableCell>

                    <TableCell key={row.id} align="right">
                        {/* <IconButton onClick={() => handleEditClick(row)} aria-label="EditIcon">
                                        <EditIcon />
                                        </IconButton> */}

                        <IconButton onClick={() => handleEditClick(row)} aria-label="EditIcon">
                            <EditIcon />
                        </IconButton>

                        <IconButton color="error" aria-label="Delete">
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
                        >
                            <CheckIcon fontSize="small" />
                        </Button>
                    </TableCell>
                </TableRow>
            ))}

        </>
    )
}