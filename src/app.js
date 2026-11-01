import { Task, TaskList } from "./task.js";

// querySelector
const list = document.querySelector("#tasks");
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const statusRegion = document.querySelector("#status");
const filters = document.querySelector("#filters")

if (!list || !form) {
    throw new Error("Required elements not found");
}

const tasklist = new TaskList();
let nextId = 1;

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

//const task1 = new Task(1, "Study JavaScript", "high");
//const task2 = new Task(2, "Complete Calculus assignment", "normal");
//const task3 = new Task(3, "Read a book", "low");
//const task4 = new Task(4, "Practise Python", "high");
//const task5 = new Task(5, "Review lecture notes", "normal");

//tasklist.add(task1);
//tasklist.add(task2);
//tasklist.add(task3);
//tasklist.add(task4);
//tasklist.add(task5);

// ======================
// BLOCK 2 - Events and event delegation
// ======================

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const title = String(formData.get("title") || "").trim();

    if (!title) {
        statusRegion.textContent = "Title is required.";
        return;
    }

    const task = new Task(nextId, title);
    nextId += 1;

    tasklist.add(task);
    form.reset();
    input.focus();
    statusRegion.textContent = "Task added.";
    renderTasks();
});

list.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const id = Number(button.dataset.taskId);

    if (button.dataset.action === "delete") {
        tasklist.remove(id);
        statusRegion.textContent = "Task deleted.";
        renderTasks();
    }
});

list.addEventListener("change", (event) => {
    const checkbox = event.target.closest("input[data-action='complete']");
    if (!checkbox) return;

    const id = Number(checkbox.dataset.taskId);
    const task = tasklist.findById(id);

    if (task) {
        task.toggle();
        renderTasks();
    }
});

filters.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-filter]");
    if (!btn) return;

    currentFilter = btn.dataset.filter;
    renderTasks();
});
