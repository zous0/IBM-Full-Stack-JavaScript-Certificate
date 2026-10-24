# 21 — APIs and HTTP

**What it is:** An API lets one program ask another program for data. HTTP is how many web apps send requests and receive responses.

**When I use it:** Getting a list of tasks, loading products, sending form data, and connecting a frontend to a backend.

The steps I want to remember:

1. `fetch(url)` sends a request and returns a Promise for a response.
2. `response.ok` checks whether the HTTP status is successful.
3. `await response.json()` reads and parses the response body.
4. `try/catch` handles network and parsing errors.

```js
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
if (!response.ok) throw new Error(`HTTP ${response.status}`);
const task = await response.json();
console.log(task.title);
```

The snippet above belongs inside an `async` function (or another environment that supports top-level `await`).

Try [get-tasks.js](./get-tasks.js) with `node get-tasks.js` using Node.js 20+ and an internet connection. The example uses the free JSONPlaceholder test API. It doesn't need an API key.

**Practice:** Print `"Done"` for completed tasks and `"Not done"` for the others. Then change the loop to show only unfinished tasks.
