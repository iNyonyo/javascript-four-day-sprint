function toggleTask(tasks, id) {
    const newTasks = [];
    
    for (let task of tasks) {
        if (task.id === id) {
            newTasks.push({
                id: task.id,
                title: task.title,
                completed: !task.completed,
                priority: task.priority,
                createdAt: task.createdAt
            });
        } else {
            newTasks.push(task);
        }
    }

    return newTasks;
}

const sampleTasks = [
    { id: 1, title: "Read brief", completed: false, priority: "high", createdAt: "29-10-2026"},
    { id: 2, title: "Draft outline", completed: true, priority: "medium", createdAt: "29-10-2026"},
    { id: 3, title: "Finalize draft", completed: false, priority: "medium", createdAt: "29-10-2026"},
    { id: 4, title: "Schedule meeting", completed: true, priority: "low", createdAt: "29-10-2026"},
    { id: 5, title: "Debrief team", completed: false, priority: "high", createdAt: "29-10-2026"}
]


//Prooving that the original array is not changed
const proof = toggleTask(sampleTasks, 3);
const proof1 = toggleTask(sampleTasks, 6);

console.log(proof);
console.log(proof1);
console.log(sampleTasks);