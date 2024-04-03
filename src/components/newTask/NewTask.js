import { useState } from "react";
import TaskModel from "../../models/task.model";
import HttpService from "../../services/httpService";
import { useNavigate } from "react-router-dom";

function NewTask() {

    const [newTask, setNewTask] = useState(new TaskModel());
    let httpService = new HttpService();
    let navigate = useNavigate();

    const onChange = (e) => {
        let updated = { ...newTask };
        updated[e.target.name] = e.target.value;
        setNewTask(updated);
    }

    const setTaskUndone = () => {
        let updated = { ...newTask };
        updated.isDone = !updated.isDone;
        setNewTask(updated);
    }

    const addTask = () => {
        httpService.post(newTask)
            .then(response => {
                navigate('/');
            })
            .catch((error) => {
                navigate('/pagenotfound');
            });
    }


    return <div>
        <h1>New Task</h1>
        <fieldset>
            <strong>Name: </strong><input type='text' value={newTask.name} name="name" onChange={onChange} />
            <strong>Description: </strong><input type='text' value={newTask.description} name="description" onChange={onChange} />
            <strong>Image: </strong><input type='text' value={newTask.image} name="image" onChange={onChange} />
            <strong>Done? </strong><input style={{ width: '30px' }} type="checkbox" name="isDone" onClick={setTaskUndone} />
            <strong>DeadlineDate: </strong><input type='date' value={newTask.deadlineDate} name="deadlineDate" onChange={onChange} />

            <button onClick={addTask}>Add Task</button>
        </fieldset>
    </div>
}

export default NewTask;
