function TodoTable(props) {
    
    const deleteTodo = (index) => {
        props.deleteTodo(index);
    };

    return (
        <>
            <table>
                <tbody>
                    <tr className="tableHeaders">
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {props.todoList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.description}</td>
                            <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoTable;