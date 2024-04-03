import { useEffect, useState } from "react";
import Task from "../task/Task";
import HttpService from "../../services/httpService";
import { useDispatch, useSelector } from "react-redux";
import { toggleDoneStyle } from "../../store/slices/taskDone";

function TaskList() {

    const [list, setList] = useState([]);
    let httpService = new HttpService();

    const dispatch = useDispatch();
    const styles = useSelector((state) => state.marker.styles);

    useEffect(() => {
        httpService.get()
            .then(response => {
                setList(sorter(response.data));
            })
            .catch((error) => console.log(error));
    }, [])

    useEffect(() => {
        list.forEach(task => {
            dispatch(toggleDoneStyle({
                taskId: task.id,
                style: { listStyleType: task.isDone ? "'✔️  '" : "'❌  '" }
            }));
        });
    }, [list, dispatch]);

    const sorter = (list) => {
        let listSortedByDate = list.sort((a, b) => new Date(a.deadlineDate).getTime() - new Date(b.deadlineDate).getTime());
        let listSortedByDone = listSortedByDate.sort((a, b) => a.isDone - b.isDone);
        return listSortedByDone;
    }

    const updateTask = (task) => {
        httpService.put(task)
            .then(response => {
                let update = [...list];
                let index = list.findIndex(t => t.id === task.id);
                update[index] = task;
                setList(sorter(update));
            })
            .catch((error) => console.log(error));
    }

    const deleteTask = (id) => {
        httpService.delete(id)
            .then(response => {
                let update = list.filter(t => t.id !== id);
                setList(update);
            })
            .catch((error) => console.log(error));
    }


    return <div>
        <div>
            <h1>📝Task Manager📝</h1>
            {list.map(task => <div key={task.id}>
                <ul>
                    <li style={styles[task.id]}>
                        <Task task={task} onUpdate={updateTask} toDelete={deleteTask}></Task>
                    </li>
                </ul>
            </div>)}
        </div>
    </div>
}

export default TaskList;