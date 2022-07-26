import { useState } from 'react';

function App() {

    const [todoList, setTodolist] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            name: newTask
        };

        setTodolist([...todoList, task])
    }

    const deleteTask = (id) => {
        const newList = todoList.filter((task) => {
            return task.id !== id
        })
        setTodolist(newList)
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
                            return (
                                <div>
                                    <li>{task.name} {" "}
                                        <button onClick={() => deleteTask(task.id)}>X</button>
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    );
}

export default App;