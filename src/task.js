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
//console.log(completeTask(sampleTasks, 1));
//console.log(deleteTask(sampleTasks, 999));
//console.log(renameTask(sampleTasks, 999, "New title"));

// Blank title
//console.log(addTask(sampleTasks, 7, "", false, "low", "2026-10-29"));          // or "   "
//console.log(renameTask(sampleTasks, 1, ""));
//console.log(renameTask(sampleTasks, 1, "   "));

// ======================
// BLOCK 2 - Array methods as readable tools
// ======================

function incompleteTasks(task) {
    if (task.completed === false){
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
    { id: 1, title: "Read brief", completed: false, priority: "high" },
    { id: 2, title: "Draft outline", completed: true, priority: "medium" }
];

const incomplete = newSampleTasks.filter(incompleteTasks);
const task_title = newSampleTasks.map(taskTitle);
const find_id = findTaskById(sampleTasks, 3);

const openTitles = newSampleTasks.filter(incompleteTasks).map(taskTitle);

console.log(findTaskById(sampleTasks, 99));

console.log(openTitles);
console.log(incomplete);
console.log(task_title);
console.log(find_id);

const countCompleted = newSampleTasks.reduce((acc, task) => {
    if (task.completed) {
        // if this priority isn't in acc yet, start it at 0, then add 1
        acc[task.priority] = (acc[task.priority] || 0) + 1;
    }
    return acc; // always return the accumulator
}, {});

console.log(countCompleted);

// ======================
// BLOCK 3 - Object-Oriented Programming
// ======================

