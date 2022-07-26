

function App() {
    return (
        <div className="App">
            <div className="addTask">
                <h1>ToDo List</h1>
                <input type="text"></input>
                <button>Add Task</button>
            </div>
            <div className="listItems">
                <h3>Tasks</h3>
                <ul>
                    <li>List Items</li>
                </ul>
            </div>

        </div>
    );
}

export default App;