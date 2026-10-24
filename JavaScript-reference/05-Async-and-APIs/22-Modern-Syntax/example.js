const product = { name: "Keyboard", price: 35, stock: 0 };
const { name, price } = product;
console.log(`${name}: $${price}`);

const products = ["Mouse", "Keyboard"];
const updatedProducts = [...products, "Monitor"];
console.log(updatedProducts);

const updatedProduct = { ...product, price: 30 };
console.log(updatedProduct);

const add = (...numbers) => numbers.reduce((sum, number) => sum + number, 0);
console.log(add(2, 3, 4)); // 9

const customer = { profile: { name: "Alex" } };
console.log(customer.shipping?.city ?? "No city set");
console.log(product.stock ?? 10); // 0, not 10
