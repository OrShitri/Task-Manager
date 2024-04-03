class TaskModel {
    constructor(id = 0, name = "", description = "", image = "", isDone = false, deadlineDate = new Date()) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.isDone = isDone;
        this.deadlineDate = deadlineDate;
    }
}

export default TaskModel;