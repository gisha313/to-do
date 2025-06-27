import { openAddTaskForm } from "./event-handler";
import { getGroupList } from "./storage";

function displayGroupElements() {
  const ulGroups = document.querySelector(".group-list");
  const groups = getGroupList();
  groups.forEach((groupName) => {
    const li = document.createElement("li");
    const navItem = document.createElement("div");
    navItem.classList.add("nav-item");

    const a = document.createElement("a");
    a.textContent = groupName;

    navItem.appendChild(a);
    li.appendChild(navItem);
    ulGroups.appendChild(li);
  });
}

export default function initializeNavBar() {
  const nav = document.querySelector("nav");
  const addTaskBtn = nav.querySelector("#add-task-btn");
  addTaskBtn.addEventListener("click", openAddTaskForm);
  displayGroupElements();
}
