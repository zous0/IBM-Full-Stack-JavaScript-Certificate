const appName = "Task List";

function showTask() {
  const taskName = "Study JavaScript";
  if (taskName.length > 5) {
    const message = "Long task name";
    console.log(message);
  }
  console.log(`${appName}: ${taskName}`);
  // message is not available outside the if block.
}

showTask();
