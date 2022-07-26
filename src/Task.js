function formatTime(date) {
    return date.toLocaleTimeString();
}

const Task = (props) => {
    return (
        <div>
            <li><span style={{ color: props.completed ? 'green' : 'blue' }}>{props.name}</span> {" "} Added on: {formatTime(props.dateAdded)}
                <button onClick={() => props.completeTask(props.id)}> Completed </button>
                <button onClick={() => props.deleteTask(props.id)}> X </button>
            </li>
        </div>
    );
}

export default Task;