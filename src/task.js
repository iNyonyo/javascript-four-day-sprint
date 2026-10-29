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
console.log(completeTask(sampleTasks, 1));
console.log(deleteTask(sampleTasks, 999));
console.log(renameTask(sampleTasks, 999, "New title"));

// Blank title
console.log(addTask(sampleTasks, 7, "", false, "low", "2026-10-29"));          // or "   "
console.log(renameTask(sampleTasks, 1, ""));
console.log(renameTask(sampleTasks, 1, "   "));