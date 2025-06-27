import TaskList from "./task-list";
import Task from "./task";

const taskList = new TaskList();
const groupList = ["Homework", "Job", "Personal"];

export function getTaskList() {
  return taskList;
}

export function getTaskById(taskId) {
  return taskList.getTask(taskId);
}

export function getGroupList() {
  return groupList;
}

export function addGroup(group) {
  groupList.add(group);
}

export function removeTaskById(taskId) {
  taskList.removeTask(taskId);
}

export function addTask(taskData) {
  taskList.addTask(new Task(...taskData));
}
