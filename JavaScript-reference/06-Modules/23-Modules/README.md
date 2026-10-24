# 23 — Modules (`import` and `export`)

**What it is:** Splitting code into separate files, each with one job.

**When I use it:** Once a project grows beyond a few lines or I want to reuse functions.

This small example has three JavaScript files:

- [products.js](./products.js) has the data.
- [helpers.js](./helpers.js) has the calculation.
- [main.js](./main.js) imports both and prints results.

Run from this folder:

```bash
node main.js
```

`package.json` sets `"type": "module"`. In Node.js, relative import paths need the `.js` extension.

**Practice:** Add another product and make a helper function that returns only products under $50.
