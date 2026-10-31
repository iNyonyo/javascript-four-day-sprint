import { Task, TaskList } from "./task.js";

// querySelector
const list = document.querySelector("#tasks");
const form = document.querySelector("#form");

if (!list || !form) {
    throw new Error("Required elements not found");
}

const tasklist = new TaskList();

function renderTasks() {
    // clear list
    list.innerHTML = "";

    const tasks = tasklist.getAllTasks();

    if (tasks.length === 0) {
        const createList = document.createElement("li");
        createList.textContent = "No tasks yet.";

        list.appendChild(createList);
    } else {
        for (let task of tasks) {
            // create li
            const createList = document.createElement("li");
            createList.textContent = task.title;

            // create button
            const createButton = document.createElement("button");
            createButton.textContent = "Delete";

            // create checkbox
            const createCheckbox = document.createElement("input");
            createCheckbox.type = "checkbox";

            // append nodes
            list.appendChild(createList);
            createList.appendChild(createButton);
            createList.append(createCheckbox);
        }
    }
}


const task1 = new Task(1, "Study JavaScript", "high");
const task2 = new Task(2, "Complete Calculus assignment", "normal");
const task3 = new Task(3, "Read a book", "low");
const task4 = new Task(4, "Practise Python", "high");
const task5 = new Task(5, "Review lecture notes", "normal");

tasklist.add(task1);
tasklist.add(task2);
tasklist.add(task3);
tasklist.add(task4);
tasklist.add(task5);

renderTasks();