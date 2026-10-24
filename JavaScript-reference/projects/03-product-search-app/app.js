// A small list of sample products. No server needed for this project.
const products = [
  { id: 1, name: "Wireless Mouse", category: "Accessories", price: 22 },
  { id: 2, name: "Mechanical Keyboard", category: "Accessories", price: 69 },
  { id: 3, name: "USB-C Hub", category: "Accessories", price: 35 },
  { id: 4, name: "Bluetooth Headphones", category: "Audio", price: 89 },
  { id: 5, name: "Desk Speakers", category: "Audio", price: 55 },
  { id: 6, name: "24-inch Monitor", category: "Displays", price: 159 },
];

const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const sortSelect = document.querySelector("#sort");
const productList = document.querySelector("#product-list");
const resultCount = document.querySelector("#result-count");

function getMatchingProducts() {
  const searchText = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;
  const sort = sortSelect.value;

  const matches = products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(searchText);
    const matchesCategory = category === "all" || product.category === category;
    return matchesName && matchesCategory;
  });

  if (sort === "low") matches.sort((a, b) => a.price - b.price);
  if (sort === "high") matches.sort((a, b) => b.price - a.price);

  return matches;
}

function renderProducts() {
  const matches = getMatchingProducts();
  productList.replaceChildren();
  resultCount.textContent = `${matches.length} product(s) found`;

  if (matches.length === 0) {
    const message = document.createElement("p");
    message.className = "empty";
    message.textContent = "No matches. Try another search or category.";
    productList.appendChild(message);
    return;
  }

  for (const product of matches) {
    const card = document.createElement("article");
    card.className = "product";
    const name = document.createElement("h2");
    const category = document.createElement("p");
    const price = document.createElement("p");

    name.textContent = product.name;
    category.textContent = product.category;
    price.className = "price";
    price.textContent = `$${product.price.toFixed(2)}`;

    card.append(name, category, price);
    productList.appendChild(card);
  }
}

searchInput.addEventListener("input", renderProducts);
categorySelect.addEventListener("change", renderProducts);
sortSelect.addEventListener("change", renderProducts);
renderProducts();
