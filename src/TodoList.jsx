export default TodoList;

import { useState } from "react";
import TodoTable from "./TodoTable";


function TodoList() {
    const [desc, setDesc] = useState({description : '', date : ''});
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event) => {
        //setDesc(event.target.value);
        if (event.target.id === 'date') {
            setDesc({...desc, date : event.target.value});
        } else {
            setDesc({...desc, description : event.target.value});
        }
    }

    const addTodo = () => {
        if (desc.description.trim().length) {
            setTodoList([...todoList, desc]);
            setDesc({description : "", date : ''});
        } else {
            alert("Can not have an Empty Description.");
        }
    }
    
    const deleteTodo = (index) => {
        setTodoList(todoList.filter((todo, i) => i !== index));
    };

    return(
        <>
            <div className="container">
            <fieldset>
                <legend>Add Todo</legend> 
                <label className="desc">Description:</label><input placeholder="Some Task" onChange={handleChange} value = {desc.description} />
                <label className="date">Date:</label><input id ="date" placeholder="Some Date" onChange={handleChange} value = {desc.date} />
                <button onClick={addTodo}>Add</button>
            </fieldset>
            </div>
            <TodoTable todoList={todoList} deleteTodo={deleteTodo} />
        </>
    );
}