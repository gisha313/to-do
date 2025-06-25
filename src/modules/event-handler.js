import { getTaskById } from "./storage";

function expandTaskContent(taskDiv) {
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
  else taskDiv.classList.add("done");

  task.toggleCompletion();

  collapseTaskContent(taskDiv);
}
