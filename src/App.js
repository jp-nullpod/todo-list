import { useState } from 'react';
import Task from './Task';


function App() {

    const [todoList, setTodolist] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            name: newTask,
            dateAdded: new Date(),
            completed: false,
        };

        setTodolist([...todoList, task])
    }

    const completeTask = (id) => {
        const updatedList = todoList.map((task) => {
            if (task.id === id) {
                return { ...task, completed: true };
            }
            else {
                return task;
            }
        })

        setTodolist(updatedList);
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
                                <Task
                                    id={task.id}
                                    name={task.name}
                                    dateAdded={task.dateAdded}
                                    completed={task.completed}
                                    completeTask={completeTask}
                                    deleteTask={deleteTask}
                                />
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    );
}

export default App;