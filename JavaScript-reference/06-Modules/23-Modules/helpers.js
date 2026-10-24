export function calculateTotal(items) {
  return items.reduce((total, product) => total + product.price, 0);
}
