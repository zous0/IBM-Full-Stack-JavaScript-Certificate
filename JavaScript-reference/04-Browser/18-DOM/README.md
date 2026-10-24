# 18 — DOM (Document Object Model)

**What it is:** The DOM is the browser's representation of an HTML page. JavaScript can find elements and change them.

**When I use it:** Showing results, updating a message, or rendering information on a page.

```js
const heading = document.querySelector("#heading");
heading.textContent = "Welcome back!";
```

To try it, open [index.html](./index.html) in a browser. The JavaScript is in [app.js](./app.js).

**Practice:** Add a second paragraph in HTML and update its text using `querySelector()`.
