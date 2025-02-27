const TaskManager = require("./tasks");
const taskmanager = new TaskManager();

taskmanager.addTask("Estudar JS");
taskmanager.addTask("Saber digitar corretamente");
taskmanager.addTask("Estudar NodeJS");

let tasks = taskmanager.getTasks();
tasks.forEach((t, index) => console.log(`${index+1} - ${t}`))

