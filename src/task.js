// ======================
// BLOCK 1 - Arrays and object records
// ======================

const sampleTasks = [
    { id: 1, title: "Read brief", completed: false, priority: "high", createdAt: "29-10-2026"},
    { id: 2, title: "Draft outline", completed: true, priority: "medium", createdAt: "29-10-2026"},
    { id: 3, title: "Finalize draft", completed: false, priority: "medium", createdAt: "29-10-2026"},
    { id: 4, title: "Schedule meeting", completed: true, priority: "low", createdAt: "29-10-2026"},
    { id: 5, title: "Debrief team", completed: false, priority: "high", createdAt: "29-10-2026"}
]

function addTask(tasks, id, title, completed, priority, createdAt) {
    const newTasks = [];

    for (let task of tasks){
        newTasks.push(task);
    }

    if (!title || title.trim() === "" || !id) {
        throw new Error("Title and id must not be blank.");
    } else {
        newTasks.push({
        id: id,
        title: title,
        completed: completed,
        priority: priority,
        createdAt: createdAt
    });

    }
    
    return newTasks;
}

function completeTask(tasks, id) {
    const newTasks = [];
    
    if (!id) {
            throw new Error("Id is missing.");
    } else {
        for (let task of tasks) {
            if (task.id === id) {
                newTasks.push({
                    id: task.id,
                    title: task.title,
                    completed: true,
                    priority: task.priority,
                    createdAt: task.createdAt
                });
            } else {
                newTasks.push(task);
            }
        }
    }

    return newTasks;
}

function deleteTask(tasks, id) {
    const newTasks = [];
    if (!id) {
            throw new Error("Id is missing.");
    } else {
        for (let task of tasks) {
            if (task.id === id) {
                continue
            } else {
                newTasks.push(task);
            }
        }
    }

    return newTasks;
}

function renameTask(tasks, id, title) {
    const newTasks = [];

    for (let task of tasks) {
        if (!title || title.trim() === "" || !id) {
            throw new Error("Title and id must not be blank.");
        }
        else if (task.id === id) {
            newTasks.push({
                id: task.id,
                title: title,
                completed: task.completed,
                priority: task.priority,
                createdAt: task.createdAt
            })
        } else {
            newTasks.push(task);
        }
    }

    return newTasks;
}

// Missing id
console.log(completeTask(sampleTasks));

// Blank title
console.log(addTask(sampleTasks, 7, "", false, "low", "2026-10-29"));          // or "   "


// ======================
// BLOCK 2 - Array methods as readable tools
// ======================

function incompleteTasks(task) {
    if (task.completed === false){
        return task.title;
    } 
}

function completeTasks(task) {
    if (task.completed === true){
        return task.title;
    } 
}

function taskTitle(task) {
    return task.title;
}

function findTaskById(tasks, id) {
    return tasks.find(function (task) {
        return task.id === id;
    }); 
}

const newSampleTasks = [
    { id: 1, title: "Read brief", completed: false, priority: "high", overdue: true },
    { id: 2, title: "Draft outline", completed: true, priority: "medium", overdue: false }
];

const incomplete = newSampleTasks.filter(incompleteTasks);
const task_title = newSampleTasks.map(taskTitle);
const find_id = findTaskById(sampleTasks, 3);
const complete = newSampleTasks.every(completeTasks);
const overdue = newSampleTasks.some(task => task.overdue);

const openTitles = newSampleTasks.filter(incompleteTasks).map(taskTitle);

const countCompleted = newSampleTasks.reduce((acc, task) => {
    if (task.completed) {
        // if this priority isn't in acc yet, start it at 0, then add 1
        acc[task.priority] = (acc[task.priority] || 0) + 1;
    }
    return acc; // return the accumulator
}, {});



// ======================
// BLOCK 3 - Object-Oriented Programming
// ======================

export class Task {
    #completed = false;
    constructor(id, title, priority = "normal", reminder = null) {
        if (typeof title !== "string" || !title.trim()) throw new Error("Title is required and must be string");
        this.id = id; this.title = title; this.priority = priority; this.reminder = reminder;
    }
    get completed() { return this.#completed; }
    complete() { this.#completed = true; }
    describe() { return `${this.title} (${this.priority})`; }
    rename(name) { this.title = name; }
    toggle() { this.#completed = !this.#completed; }
}

class TaskList {
    #tasks = [];

    add(task) {
        for (let tasks of this.#tasks) {
            if (tasks.id === task.id) {
                throw new Error("Use a different ID.")
            } 
        }
        this.#tasks.push(task);
    }

    remove(id) {
        const index = this.#tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.#tasks.splice(index, 1);
        }
    }

    findById(id) {
        return this.#tasks.find(task => task.id === id);
    }

    getOpenTasks() {
        return this.#tasks.filter(task => !task.completed);
    }
}

// ======================
// BLOCK 4 - Composition, testing, refactoring
// ======================

// Create test script
const task1 = new Task(1, "Code", "high"); 
const task2 = new Task(2, "Play dance", "normal");

// Complete test script
task1.complete() 

// Creating tasklist to test open
const tasklist = new TaskList(); 
tasklist.add(task1);
tasklist.add(task2);

// filter open test
console.log(tasklist.getOpenTasks()); 

// invalid title test
const task3 = new Task(2, " ", "normal"); 

// Empty array test case
const emptyList = new TaskList();
console.log(emptyList.getOpenTasks());   

// unknown-id test case
console.log(tasklist.findById(999));     

// duplicate-id test case
const taskA = new Task(10, "First task", "high");
const taskB = new Task(10, "Duplicate id", "low");  

tasklist.add(taskA);
tasklist.add(taskB);   


