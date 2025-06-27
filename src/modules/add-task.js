import initializeNavBar from "./nav-bar";
import { addTask, getTaskList, getGroupList } from "./storage";
import { displayTasks } from "./display-tasks";

function saveTaskHandler(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  addTask(Object.values(data));
  closeForm(event.target.parentElement);
  displayTasks(getTaskList().tasks);
  event.target.reset();
}

function closeFormHandler(event) {
  const closeFormBtn = event.target;
  const formWrapper = closeFormBtn.parentElement.parentElement.parentElement;
  const form = formWrapper.querySelector("form");

  form.reset();
  closeForm(formWrapper);
}

function closeForm(formWrapper) {
  formWrapper.classList.add("hidden");
}

function groupOption(optionName) {
  const option = document.createElement("option");
  option.text = optionName;
  option.value = optionName.toLowerCase();
  return option;
}

export default function initializeAddTaskForm() {
  const addTaskForm = document.querySelector(".add-task-form");
  const cancelBtn = addTaskForm.querySelector("#cancel-task-btn");

  addTaskForm.addEventListener("submit", saveTaskHandler);
  cancelBtn.addEventListener("click", closeFormHandler);

  const groupSelection = addTaskForm.querySelector("#task-group");
  const groupList = getGroupList();
  groupList.forEach((groupName) => {
    groupSelection.add(groupOption(groupName));
  });
}
