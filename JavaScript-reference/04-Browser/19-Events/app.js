const countText = document.querySelector("#count");
const addButton = document.querySelector("#add-button");
const resetButton = document.querySelector("#reset-button");
let clicks = 0;

function showCount() {
  countText.textContent = `Clicks: ${clicks}`;
}

addButton.addEventListener("click", () => {
  clicks++;
  showCount();
});

resetButton.addEventListener("click", () => {
  clicks = 0;
  showCount();
});
