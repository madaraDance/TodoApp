import "./App.css";
import Container from '@mui/material/Container';
import CssBaseline  from "@mui/material/CssBaseline";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import TodoList from "./TodoList";
import { LocalizationProvider } from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Container maxWidth="xl">
      <CssBaseline />       
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Todos
          </Typography>
        </Toolbar> 
      </AppBar>
      <TodoList/>
      </Container>
    </LocalizationProvider>

  );
}

export default App;