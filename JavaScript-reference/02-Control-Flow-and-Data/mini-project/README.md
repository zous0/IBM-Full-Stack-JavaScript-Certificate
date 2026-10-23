# Mini Project — Product Data Explorer

This is a simple Node.js exercise using the six topics in this folder. It works with local product data, so there's no website, database, or API to set up.

## What it does

Given a list of products, the script:

1. Prints each product.
2. Finds products priced **over $500**.
3. Creates a list of product names.
4. Finds one product by name.
5. Calculates the total price of all products.
6. Checks whether **any** product costs over $900.

These are the same kinds of operations I'd need before building product search and filtering in a real store.

## Run it

From the `02-Control-Flow-and-Data` directory:

```bash
node mini-project/product-data.js
```

You should see all three products, two expensive products, their names, the matching Phone, a total of **$1800**, and `true` for the over-$900 check.

## What I'm practicing

- An **array of objects** to store product records.
- A **function** to format one product.
- `for...of` to display each product.
- `filter()` to keep products over the price limit.
- `map()` to make a list of names.
- `find()` to get one matching product.
- `reduce()` to calculate the total.
- `some()` to answer a yes/no question.

## Small improvements to try

- Change the minimum price from `$500` to `$800`.
- Add a fourth product and predict the new total before running the file.
- Make `find()` search case-insensitively.
- Create a function that filters by `category` too.

**Scope:** This is a learning example with sample data, not a production shopping app.
