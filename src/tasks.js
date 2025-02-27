const { error } = require("console");

class TaskManager{
    constructor(){
        this.tasks = [];
    }

    addTask(task){
        if(!task || typeof task !== "string")
            throw new Error("A tarefa deve ser uma string")
        this.tasks.push(task);
    }

    getTasks(){
        return this.tasks;
    }

    clearTasks(){
        this.tasks = [];
    }
}
module.exports = TaskManager;