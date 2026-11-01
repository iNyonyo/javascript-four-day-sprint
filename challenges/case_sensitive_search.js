function search(tasks, query) {
    const result = [];

    for (const task of tasks) {
        const lowerCase = task.title.toLowerCase();
        const cleanedQuery = query.trim().toLowerCase();
        
        if (lowerCase.includes(cleanedQuery) === true) {
            result.push(task.title);
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

//search(sampleTasks, "Read");
//search(sampleTasks, "DRAFT");
//search(sampleTasks, " team ");
//search(sampleTasks, "xyz");
console.log(search(sampleTasks, ""));