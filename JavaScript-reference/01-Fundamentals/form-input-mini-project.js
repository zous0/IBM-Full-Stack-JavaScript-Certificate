
// Practice: working with values that could come from a form.

// Simulated form values (usually strings in a real HTML form).
const formInput = {
  username: "  Alex  ",
  age: "25",
  itemPrice: "49.99 USD",
  quantity: "3",
  wantsNewsletter: "true",
  discountCode: ""
};

// Clean up the input.
const username = String(formInput.username).trim();

// Convert numbers before doing calculations.
const age = Number(formInput.age);               // 25 (exact number)
const price = parseFloat(formInput.itemPrice);   // 49.99 (extracts decimal)
const quantity = parseInt(formInput.quantity);   // 3 (extracts integer)

// Check whether a discount was entered.
const hasDiscount = Boolean(formInput.discountCode); // false (empty string "")

// Calculate the order total.
const subtotal = price * quantity;                   // Both values are numbers
const tax = subtotal * 0.10;                         // 10% tax
const grandTotal = Number(subtotal.toFixed(2)) + Number(tax.toFixed(2)); // Safe addition

// Show the result.
console.log("=== ORDER SUMMARY ===");
console.log("Customer:", username);                     // "Alex"
console.log("Age Verified:", age >= 18);               // true
console.log("Item Price:", price);                    // 49.99
console.log("Quantity:", quantity);                   // 3
console.log("Has Discount:", hasDiscount);            // false
console.log("Subtotal:", subtotal);                   // 149.97
console.log("Grand Total:", grandTotal);               // 164.97

// Try one invalid value.
const invalidInput = "abc";
const parsedInvalid = Number(invalidInput);

if (isNaN(parsedInvalid)) {
  console.log("Validation Error: Invalid number entered for age.");
}
