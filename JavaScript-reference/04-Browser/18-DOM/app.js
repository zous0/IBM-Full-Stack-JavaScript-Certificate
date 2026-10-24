const tasks = ["Review arrays", "Practice DOM", "Build something small"];

const summary = document.querySelector("#summary");
const taskList = document.querySelector("#task-list");

summary.textContent = `I have ${tasks.length} tasks to work on.`;

for (const task of tasks) {
  const item = document.createElement("li");
  item.textContent = task;
  taskList.appendChild(item);
}
