function getVisibleTasks(tasks, query, status) {
    if (status.toLowerCase() === "completed") {
        return completedTasks(search(tasks, query));
    } 
    else if (status.toLowerCase() === "open"){
        return openTasks(search(tasks, query));
    }
    else if (status.toLowerCase() === "all"){
        return allTasks(search(tasks, query));
    }
    else {
        throw new Error("Status can only be all/completed/open");
    }
}

function completedTasks (tasks) {
    return tasks.filter(task => task.completed === true);
}

function openTasks (tasks) {
    return tasks.filter(task => task.completed === false);
}

function allTasks (tasks) {
    return tasks;
}

function search(tasks, query) {
    const result = [];

    for (const task of tasks) {
        const lowerCase = task.title.toLowerCase();
        const cleanedQuery = query.trim().toLowerCase();
        
        if (lowerCase.includes(cleanedQuery) === true) {
            result.push(task);
        }
    }

    return result;
}

const sampleTasks = [
  { id: 1, title: "Read brief", completed: false, priority: "high" },
  { id: 2, title: "Draft outline", completed: true, priority: "medium" },
  { id: 3, title: "Finalize draft", completed: false, priority: "medium" },
  { id: 4, title: "Schedule meeting", completed: true, priority: "low" },
  { id: 5, title: "Debrief team", completed: false, priority: "high" }
]

console.log(getVisibleTasks(sampleTasks, "DRAFT", "open"));