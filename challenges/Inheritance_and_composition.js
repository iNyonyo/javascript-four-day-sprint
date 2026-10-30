import { Task } from "../src/task.js"

class Reminder extends Task {
    constructor(id, title, priority, dueDate) {
        super(id, title, priority);
        this.dueDate = dueDate;
    }

    describe() {
        return `${this.title} (${this.priority}) -> ${this.dueDate}`;
    }
}

const reminder = new Reminder(
    1,
    "Complete assignment",
    "high",
    "2026-11-05"
);

console.log(reminder.describe());


// Composition aspect of challenge

class TaskReminder {
    constructor(dueDate) {
        this.dueDate = dueDate;
    }
}

const task1 = new Task(1, "Study JavaScript", "high");

const task2 = new Task(
    2,
    "Complete assignment",
    "medium",
    new TaskReminder("2026-11-05")
);
