import { useState } from 'react';

function App() {

    const [todoList, setTodolist] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        const newTodoList = [...todoList, newTask]
        setTodolist(newTodoList)
    }

    return (
        <div className="App">
            <div className="addTask">
                <h1>ToDo List</h1>
                <input type="text" onChange={handleChange}></input>
                <button onClick={addTask}>Add Task</button>

            </div>
            <div className="listItems">
                <h3>Tasks</h3>
                <ul>
                    {
                        todoList.map((task) => {
                            return <li>{task}</li>
                        })
                    }
                </ul>
            </div>

        </div>
    );
}

export default App;