const TaskManager = require("../src/tasks");

describe("Gerenciador de tarefas", ()=>{
    let taskmanager;
    beforeEach(()=>{
        taskmanager = new TaskManager();
    })

    test("Deve adicionar uma nova tarefa", ()=>{
        taskmanager.addTask("Estudar Jest");
        expect(taskmanager.getTask()).toContain("Estudar Jest");
    });

    
    test("Deve iniciar a lista vazia", ()=>{
        expect(taskmanager.getTask()).toEqual([]);
    });

    
    test("Limpar todas as tarefas", ()=>{
        taskmanager.addTask("comprar pão");
        taskmanager.clearTasks();
        expect(taskmanager.getTask()).toEqual({});
    });

    
    test("Erro ao add tarefa invalida", ()=>{
        expect(()=> taskmanager.addTask(123)).toThrow("A tarefa deve ser uma string");
        
    });
});
