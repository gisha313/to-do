import { getTaskById  } from "./storage";
import { createTaskElement } from "./display-tasks";

function getDataFromTaskDiv(taskDiv) {
    const taskTitle = taskDiv.querySelector("h3").textContent;
    const taskDescription = taskDiv.querySelector(".task-content p").textContent ? taskDiv.querySelector(".task-content p").textContent : "";
    const taskDueDate = taskDiv.querySelector(".task-date").textContent.replace("Due: ", "");


    return {
        title: taskTitle,
        description: taskDescription,
        dueDate: taskDueDate,
    };
}

function createEditForm(taskDiv) {
    const taskData = getDataFromTaskDiv(taskDiv);
    console.table(taskData);

    const form = document.createElement("form");
    form.classList.add("edit-task-form");

    const header = document.createElement("div");
    header.classList.add("task-header");
    
    const taskStatusButton = document.createElement("button");
    taskStatusButton.classList.add("task-status");
    taskStatusButton.disabled = true;

    header.appendChild(taskStatusButton);

    const taskTitle = document.createElement("h3");
    taskTitle.innerHTML = `<input type="text" name="edit-task-title" id="edit-task-title" value="${taskData.title}" maxlength="30" required spellcheck="false" autocomplete="off">`;
    header.appendChild(taskTitle);

    form.appendChild(header);

    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");

    const taskDescription = document.createElement("p");
    taskDescription.innerHTML = `<textarea name="edit-task-description" id="edit-task-description" oninput="dynamicHeight(this)">${taskData.description}</textarea>`
    taskContent.appendChild(taskDescription);
    form.appendChild(taskContent);

    const taskFooter = document.createElement("div");
    taskFooter.classList.add("task-footer");

    const taskDueDate = document.createElement("span");
    taskDueDate.classList.add("task-date");
    //add date convertion
    taskDueDate.innerHTML = `Due: <input type="date" name="edit-task-date" id="edit-task-date" value="${taskData.dueDate}">`
    taskFooter.appendChild(taskDueDate);

    const editTaskActions = document.createElement("div");
    const saveBtn = document.createElement("button");
    saveBtn.classList.add("edit-save-btn");
    saveBtn.textContent = "Save";

    saveBtn.addEventListener("click", saveNewTaskData)

    editTaskActions.appendChild(saveBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("edit-cancel-btn");
    cancelBtn.textContent = "Cancel";
    editTaskActions.appendChild(cancelBtn);

    taskFooter.appendChild(editTaskActions);
    form.appendChild(taskFooter);

    return form;
}

function saveNewTaskData(event) {
    event.preventDefault();
    const taskDiv = event.target.parentElement.parentElement.parentElement.parentElement;
    const newTitle = taskDiv.querySelector("#edit-task-title").value;
    const newDescription = taskDiv.querySelector("#edit-task-description").value ?  taskDiv.querySelector("#edit-task-description").value : "";
    const newDueDate = taskDiv.querySelector("#edit-task-date").value;

    const newData = {title: newTitle, description: newDescription, dueDate: newDueDate}

    const taskId = taskDiv.dataset.id;
    const task = getTaskById(taskId);
    task.updateDetails(newData);

    const newTaskDiv = createTaskElement(task);
    const wrapper = taskDiv.parentElement;
    wrapper.innerHTML = "";
    wrapper.appendChild(newTaskDiv);
}

export function openEditTaskForm(taskDiv) {
    const form = createEditForm(taskDiv);
    taskDiv.innerHTML = "";

    taskDiv.appendChild(form);
}