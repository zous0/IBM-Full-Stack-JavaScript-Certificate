
// ==========================================
// MINI-PROJECT: Form Input Processing & Validation
// ==========================================

// Raw inputs (Simulating user input from HTML forms - always strings!)
const formInput = {
  username: "  Alex  ",
  age: "25",
  itemPrice: "49.99 USD",
  quantity: "3",
  wantsNewsletter: "true",
  discountCode: ""
};

// --- Step 1: String Conversion & Trimming ---
const username = String(formInput.username).trim();

// --- Step 2: Parsing Numbers (Strict vs Extraction) ---
const age = Number(formInput.age);               // 25 (exact number)
const price = parseFloat(formInput.itemPrice);   // 49.99 (extracts decimal)
const quantity = parseInt(formInput.quantity);   // 3 (extracts integer)

// --- Step 3: Boolean Evaluation ---
const hasDiscount = Boolean(formInput.discountCode); // false (empty string "")

// --- Step 4: Calculations (Avoiding '+' Concatenation Bug) ---
const subtotal = price * quantity;                   // Implicit coercion works for *
const tax = subtotal * 0.10;                         // 10% tax
const grandTotal = Number(subtotal.toFixed(2)) + Number(tax.toFixed(2)); // Safe addition

// --- Step 5: Summary Output ---
console.log("=== ORDER SUMMARY ===");
console.log("Customer:", username);                     // "Alex"
console.log("Age Verified:", age >= 18);               // true
console.log("Item Price:", price);                    // 49.99
console.log("Quantity:", quantity);                   // 3
console.log("Has Discount:", hasDiscount);            // false
console.log("Subtotal:", subtotal);                   // 149.97
console.log("Grand Total:", grandTotal);               // 164.97

// --- Step 6: Edge Case Handling Example ---
const invalidInput = "abc";
const parsedInvalid = Number(invalidInput);

if (isNaN(parsedInvalid)) {
  console.log("Validation Error: Invalid number entered for age.");
}
