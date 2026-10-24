async function getTasks() {
  try {
    console.log("Loading tasks...");

    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    if (!response.ok) {
      throw new Error(`Request failed: HTTP ${response.status}`);
    }

    const tasks = await response.json();
    if (!Array.isArray(tasks)) {
      throw new Error("Expected a list of tasks");
    }

    for (const task of tasks) {
      const status = task.completed ? "Done" : "Not done";
      console.log(`${task.id}. ${task.title} — ${status}`);
    }
  } catch (error) {
    console.error("Could not load tasks:", error.message);
  }
}

getTasks();
