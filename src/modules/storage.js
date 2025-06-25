import TaskList from "./task-list";

const taskList = new TaskList();

export function getTaskList() {
  return taskList;
}

export function getTaskById(taskId) {
  return taskList.getTask(taskId);
}
