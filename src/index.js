import "./styles.css";
import TaskList from "./modules/task-list";
import Task from "./modules/task";
import {displayTasks} from "./modules/display-tasks";
import { getTaskList } from "./modules/storage";

const list = getTaskList();
list.addTask(
  new Task("Title1", "Description", "20-07-2025", "high", "Homework")
);
list.addTask(new Task("Title2", "", "20-08-2025", "low", "Job"));
list.addTask(
  new Task(
    "Title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsum iusto officia similique nobis. Ipsam fugiat neque laborum totam voluptatum unde beatae temporibus, dolor alias. Corrupti, repellat? Totam, ipsa sunt!",
    "10-07-2025",
    "medium",
    "Homework"
  )
);

displayTasks(list.tasks);
