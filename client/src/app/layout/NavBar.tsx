import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, IconButton, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';


type Props = {
  onAddTask: () => void;
};


export default function NavBar({ onAddTask }: Props) {
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <AppBar
                position="static"
                sx={{
                    backgroundImage: 'linear-gradient(135deg, #1e1e2f 0%, #3a3f58 60%, #4e597b 100%)',
                    borderRadius: 2,
                    maxWidth: 900, // Set desired width
                    width: '100%',
                    mt: 10
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant='h5' fontWeight='bold'>To-Do-List</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {/* <MenuItem sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                            Order By
                        </MenuItem> */}                 

                        <MenuItem sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                            <IconButton color='inherit' aria-label="FilterListIcon">
                                <FilterListIcon  />
                            </IconButton>
                        </MenuItem> 
                        

                        <Button onClick={onAddTask} size="large" variant="contained" color="primary">
                            Add Task
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
