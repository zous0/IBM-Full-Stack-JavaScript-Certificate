# Setup and console

JavaScript runs in the browser or in Node.js.

- **Browser:** use JavaScript to work with a page, like buttons or forms.
- **Node.js:** run JavaScript files from the terminal without opening a website.

For now I mainly use Node.js to practice.

```js
console.log('Hello, JavaScript!');
```

Save this as `hello.js` and run `node hello.js`. The message should show in your terminal.

In a browser, `document.querySelector('h1')` finds the first `<h1>` element on the page. That won't work in regular Node.js because there's no page to search.
