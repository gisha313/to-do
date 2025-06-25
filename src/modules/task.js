export default class Task {
  constructor(title, description, dueDate, priority, group) {
    this._id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.group = group;
    this.completed = false;
  }

  get id() {
    return this._id;
  }

  get isCompleted() {
    return this.completed;
  }

  toggleCompletion() {
    this.completed = !this.completed;
  }

  updateDetails({ title, description, dueDate, priority, group }) {
    if (title) this.title = title;
    if (description) this.description = description;
    if (dueDate) this.dueDate = dueDate;
    if (priority) this.priority = priority;
    if (group) this.group = group;
  }
}
