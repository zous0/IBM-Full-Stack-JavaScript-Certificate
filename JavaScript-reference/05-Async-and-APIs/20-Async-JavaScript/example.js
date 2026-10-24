function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadMessage() {
  console.log("Loading...");
  await wait(500);
  console.log("Done! Here's the result.");
}

loadMessage().catch((error) => console.error("Error:", error.message));
