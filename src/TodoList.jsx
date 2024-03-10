export default TodoList;
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useRef, useState } from "react";
/*import TodoTable from "./TodoTable";*/
import { AgGridReact } from "ag-grid-react";
import { DatePicker } from '@mui/x-date-pickers';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { TextField } from '@mui/material';


function TodoList() {
    const [desc, setDesc] = useState({description : '', date : '', priority : ''});
    const [todoList, setTodoList] = useState([]);
    const [columnDefs] = useState([
        {field: 'description', sortable: true, filter: true, floatingFilter: true, animateRows : true},
        {field: 'priority', sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value.toLowerCase() === "high" ? { color: 'red' } : (params.value.toLowerCase() === "medium" ? { color: 'orange' } : { color: 'green' })},
        {field: 'date', sortable: true, filter: true, floatingFilter: true}
      ]);
    const gridRef = useRef(); 

    const handleChange = (event) => {
        if (event.$d) {
            setDesc({...desc, date : event.$d.toLocaleDateString()});
        } else if (event.target.id === 'description') {
            setDesc({...desc, description : event.target.value});
        } else {
            setDesc({...desc, priority : event.target.value});
        }
    }

    const addTodo = () => {
        if (desc.description.trim().length) {
            setTodoList([...todoList, desc]);
            setDesc({description : "", date : '', priority : ''});
        } else {
            alert("Can not have an Empty Description.");
        }
    }
    
    /*const deleteTodo = (index) => {
        setTodoList(todoList.filter((todo, i) => i !== index));
    };*/

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
          setTodoList(todoList.filter((todo, index) => 
            index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
          alert('Select a row first!');
        }
      };

    return(
        <>
            <div className="container">
                <fieldset>
                    <legend>Add Todo</legend>
                    <Stack mt={2} direction="row" spacing={2} justifyContent="center" alignItems="center">
                        <TextField className="desc" label="Task" id ="description" placeholder="Task todo" onChange={handleChange} value = {desc.description} />
                        <TextField className="prio" label="Priority" id="priority"placeholder="High, Meduim or Low" onChange={handleChange} value ={desc.priority} />
                        <DatePicker className="date" label = "Date" id="date" placeholder="Date to complete" onChange={handleChange} value = {desc.date} />
                        <Button variant="contained" color="primary" onClick={addTodo}>Add</Button>
                        <Button variant="contained" color='error' onClick={handleDelete}>Delete</Button>
                    </Stack>
                </fieldset>
            </div>
            <div className="ag-theme-material" style={{width: 900, height: 300}}>
                <AgGridReact ref={gridRef} rowData={todoList}
                    columnDefs={columnDefs} rowSelection="single" 
                    onGridReady={ params => gridRef.current = params.api }
                />
            </div> 
        </>
    );
}