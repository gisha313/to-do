import { openAddTaskForm } from "./event-handler";

export default function initializeNavBar() {
  const nav = document.querySelector("nav");
  const addTaskBtn = nav.querySelector("#add-task-btn");
  addTaskBtn.addEventListener("click", openAddTaskForm);
}
