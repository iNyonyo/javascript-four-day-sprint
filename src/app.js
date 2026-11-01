import { Task, TaskList } from "./task.js";

// querySelector
const list = document.querySelector("#tasks");
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const statusRegion = document.querySelector("#status");
const filters = document.querySelector("#filters")

if (!list || !form || !input) {
  throw new Error("Required elements not found");
}

const tasklist = new TaskList();
let nextId = 1;
let currentFilter = "all";

function renderTasks() {
    list.innerHTML = "";

    let tasks = list.getAllTasks();

    if (currentFilter === "open") {
        tasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === "completed") {
        tasks = tasks.filter(task => task.completed);
    }

    if (tasks.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No tasks yet.";
        list.appendChild(li);
        return;
    }

    for (const task of tasks) {
        const li = document.createElement("li");
        li.dataset.taskId = task.id;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.dataset.action = "complete";
        checkbox.dataset.taskId = task.id;

        const span = document.createElement("span");
        span.textContent = task.title;
        if (task.completed) {
        span.style.textDecoration = "line-through";
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.textContent = "Delete";
        deleteBtn.dataset.action = "delete";
        deleteBtn.dataset.taskId = task.id;

        li.append(checkbox, span, deleteBtn);
        list.appendChild(li);
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
    const result = validateTaskInput(formData.get("title"));

    if (result.error) {
        statusRegion.textContent = result.error;
        input.focus();
        return;
    }

    const task = new Task(nextId, result.value);
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


// ======================
// BLOCK 3 - Form validation and accessible feedback
// ======================

function validateTaskInput(title) {
  const cleaned = String(title || "").trim();

  if (!cleaned) {
    return { error: "Title is required." };
  }

  if (cleaned.length > 80) {
    return { error: "Title must be 80 characters or less." };
  }

  return { value: cleaned };
}