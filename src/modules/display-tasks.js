import {
  changeTaskStatus,
  toggleTaskContent,
  removeTask,
  editTask
} from "./event-handler";

export function createTaskElement(task) {
  const taskDiv = document.createElement("article");
  taskDiv.classList.add("task");
  taskDiv.dataset.id = task.id;
  taskDiv.dataset.priority = task.priority;

  const header = document.createElement("div");
  header.classList.add("task-header");

  const taskStatusButton = document.createElement("button");
  taskStatusButton.classList.add("task-status");
  taskStatusButton.addEventListener("click", changeTaskStatus);

  header.appendChild(taskStatusButton);

  const taskTitle = document.createElement("h3");
  taskTitle.textContent = task.title;
  header.appendChild(taskTitle);

  if (task.description) {
    // If the task has a description, add a button to toggle its visibility

    const expandBtnContainer = document.createElement("div");
    expandBtnContainer.classList.add("expand-btn-container");
    expandBtnContainer.title = "Show task description";
    const expandTaskBtn = document.createElement("button");
    expandTaskBtn.dataset.expanded = "false";
    expandTaskBtn.classList.add("expand-task-btn");
    expandTaskBtn.addEventListener("click", toggleTaskContent);
    expandBtnContainer.appendChild(expandTaskBtn);
    header.appendChild(expandBtnContainer);
  }

  taskDiv.appendChild(header);

  if (task.description) {
    // Also add the task description

    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskContent.classList.add("hidden");
    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;
    taskContent.appendChild(taskDescription);

    taskDiv.appendChild(taskContent);
  }

  const taskFooter = document.createElement("div");
  taskFooter.classList.add("task-footer");
  const taskDueDate = document.createElement("span");
  taskDueDate.classList.add("task-date");
  taskDueDate.textContent = `Due: ${task.dueDate}`;
  taskFooter.appendChild(taskDueDate);

  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");
  const editTaskBtn = document.createElement("button");
  editTaskBtn.classList.add("edit-task-btn");
  editTaskBtn.addEventListener("click", editTask);
  taskActions.appendChild(editTaskBtn);

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.classList.add("delete-task-btn");
  deleteTaskBtn.addEventListener("click", removeTask);
  taskActions.appendChild(deleteTaskBtn);

  taskFooter.appendChild(taskActions);
  taskDiv.appendChild(taskFooter);

  return taskDiv;
}

export function displayTasks(tasks) {
  const tasksWrapper = document.querySelector(".tasks-wrapper");

  tasksWrapper.innerHTML = "";
  tasks.forEach((task) => {
    const taskElementWrapper = document.createElement("div");
    taskElementWrapper.classList.add("task-element-wrapper")
    const taskElement = createTaskElement(task);
    taskElementWrapper.appendChild(taskElement)
    tasksWrapper.appendChild(taskElementWrapper);
  });
}
