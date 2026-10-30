function calculateTotal(tasks) {
    return tasks.length;
}

function calculateCompleted(tasks) {
    return calculateTotal(tasks.filter(task => task.completed === true));
}

function calculateOpen(tasks) {
    return calculateTotal(tasks.filter(task => !task.completed));
}

function calculateCompletionRate(tasks) {
    if (tasks.length === 0) {
        return 0;
    } else {
        const completed = calculateCompleted(tasks);
        const total = calculateTotal(tasks);

        const completionRate = (completed / total) * 100;

        return Math.round(completionRate);
    }
}

function priorityCount(tasks) {
    return tasks.reduce((acc, task) => {
        acc[task.priority] = (acc[task.priority] || 0) + 1;

        return acc;
    },
    {});
}

function getTaskStats(tasks) {
    return {
        total : calculateTotal(tasks),
        completed: calculateCompleted(tasks),
        open: calculateOpen(tasks),
        completionRate: calculateCompletionRate(tasks),
        counts: priorityCount(tasks),
    }
}

const tasks = [
    { id: 1, title: "Complete assignment", priority: "high", completed: true },
    { id: 2, title: "Study JavaScript", priority: "medium", completed: true },
    { id: 3, title: "Read OOP notes", priority: "low", completed: false },
    { id: 4, title: "Practice reduce()", priority: "high", completed: true },
    { id: 5, title: "Build TaskList", priority: "medium", completed: false }
]

console.log(getTaskStats(tasks));