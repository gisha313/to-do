import { getTaskById, removeTaskById } from "./storage";
import { openEditTaskForm } from "./edit-task";

export function expandTaskContent(taskDiv) {
  const taskContent = taskDiv.querySelector(".task-content");
  const expandBtn = taskDiv.querySelector(".expand-task-btn");

  if (expandBtn.dataset.expanded !== "true") {
    expandBtn.dataset.expanded = "true";
    taskContent.classList.remove("hidden");
  }
}

function collapseTaskContent(taskDiv) {
  const taskContent = taskDiv.querySelector(".task-content");
  const expandBtn = taskDiv.querySelector(".expand-task-btn");
  if (!taskContent) return;

  if (expandBtn.dataset.expanded === "true") {
    expandBtn.dataset.expanded = "false";
    taskContent.classList.add("hidden");
  }
}

function toggleEnableEditBtn(taskDiv) {
  const editBtn = taskDiv.querySelector(".edit-task-btn");
  editBtn.disabled = !editBtn.disabled;
}

export function toggleTaskContent(event) {
  const expandTaskBtn = event.target;
  const taskDiv = expandTaskBtn.parentElement.parentElement.parentElement;
  const expandBtn = taskDiv.querySelector(".expand-task-btn");

  if (expandBtn.dataset.expanded === "true") collapseTaskContent(taskDiv);
  else expandTaskContent(taskDiv);
}

export function changeTaskStatus(event) {
  const taskStatusButton = event.target;
  const taskDiv = taskStatusButton.parentElement.parentElement;
  const taskId = taskDiv.dataset.id;
  const task = getTaskById(taskId);

  if (task.isCompleted) taskDiv.classList.remove("done");
  else {
    taskDiv.classList.add("done");
    collapseTaskContent(taskDiv);
  }

  task.toggleCompletion();
  toggleEnableEditBtn(taskDiv);
}

export function removeTask(event) {
  const deleteTaskBtn = event.target;
  const taskDiv = deleteTaskBtn.parentElement.parentElement.parentElement;
  const taskId = taskDiv.dataset.id;

  removeTaskById(taskId);
  taskDiv.remove();
}

export function editTask(event) {
  const editTaskBtn = event.target;
  const taskDiv = editTaskBtn.parentElement.parentElement.parentElement;

  openEditTaskForm(taskDiv);
}

export function openAddTaskForm(event) {
  const addTaskFormWrapper = document.querySelector(".add-task-form-wrapper");
  addTaskFormWrapper.classList.remove("hidden");
}
