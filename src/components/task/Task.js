import { useState } from "react";

function Task(props) {

    const [task, setTask] = useState(props.task);

    let design = {
        background: 'rgba(255,0,0,0.5)',
        padding: '10px'
    }

    if (task.isDone) {
        design.background = 'rgba(255,0,0,0.2)';
    }

    const setTaskUndone = () => {
        let updated = { ...task };
        updated.isDone = !updated.isDone;
        setTask(updated);

        props.onUpdate(updated);
    }


    return <div style={design}>

        <h2>{task.name}</h2>
        <h3>Deadline: {task.deadlineDate}</h3>
        <strong>Is Done: </strong><input type="checkbox" value={task.isDone} checked={task.isDone} onChange={setTaskUndone} />

        <figure>
            <img src={task.image} width={700} alt={task.name} />
            <figcaption><strong>Description: </strong>{task.description}</figcaption>
        </figure>

        {task.isDone ? <button onClick={setTaskUndone}>Undone</button> : <button onClick={setTaskUndone}>Done</button>}
        <button onClick={() => props.toDelete(task.id)}>Delete</button>

    </div>
}

export default Task;