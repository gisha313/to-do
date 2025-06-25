import Task from "./task.js";

export default class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    if (task instanceof Task) {
      this.tasks.push(task);
    } else {
      throw new Error("Invalid task");
    }
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  editTask(taskId, newTaskDetails) {
    this.tasks.find((task) => task.id === taskId).updateDetails(newTaskDetails);
  }

  getTask(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }
}
