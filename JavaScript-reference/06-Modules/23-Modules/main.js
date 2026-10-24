import { products } from "./products.js";
import { calculateTotal } from "./helpers.js";

console.log("Products:");
for (const product of products) {
  console.log(`- ${product.name}: $${product.price}`);
}
console.log("Total: $" + calculateTotal(products));
