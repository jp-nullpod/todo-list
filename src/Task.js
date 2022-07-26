function formatTime(date) {
    return date.toLocaleTimeString();
}

const Task = (props) => {
    return (
        <div>
            <li><span style={{ color: 'blue' }}>{props.name}</span> {" "} Added on: {formatTime(props.dateAdded)}
                <button onClick={() => props.deleteTask(props.id)}> X </button>
            </li>
        </div>
    );
}

export default Task;