const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const btn = document.querySelector("button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
window.addEventListener("DOMContentLoaded", () => {
  tasks.forEach((text) => {
    addTask(text);
  });
});

function addTask(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const deleteTask = document.createElement("button");
  deleteTask.innerHTML = '<i class="fas fa-trash"></i>';
  deleteTask.addEventListener("click", function () {
    li.remove();
    tasks = tasks.filter((t) => t !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  todoList.appendChild(li);
  li.appendChild(deleteTask);
}

function addTaskTodo() {
  if (todoInput.value === "") {
    alert("write something!");
    return;
  }

  addTask(todoInput.value);

  tasks.push(todoInput.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  todoInput.value = "";
}

btn.addEventListener("click", addTaskTodo);
