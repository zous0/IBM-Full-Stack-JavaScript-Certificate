# 19 — Events

**What it is:** An event is something that happens on a webpage, such as a button click or typing in an input.

**When I use it:** Almost every interactive webpage needs event listeners.

```js
button.addEventListener("click", () => {
  message.textContent = "Button clicked!";
});
```

Open [index.html](./index.html) to test the counter. The code is in [app.js](./app.js).

**Practice:** Add a Reset button that sets the count back to zero.
