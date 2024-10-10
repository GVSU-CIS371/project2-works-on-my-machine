import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
  return `<div class="store-item">
                <img src="${product.image}" alt="${product.name}" />
                <p>${product.name}</p>
                <p>${product.description}</p>
                <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
  const container = document.getElementById("main-container");
  if (container) {
    container.innerHTML = "";
  } else {
    return;
  }
  prods.map((product) => {
    container.innerHTML += generateProductHTML(product);
  });
}

function getByCategory(category: string): void {
  let filteredProducts = products.filter(
    (product: Product) => product.category === category
  );
  renderProducts(filteredProducts);
}

function getByRating(minRating: number): void {
  let filteredRatings = products.filter(
    (product) => product.rating === minRating
  );
  renderProducts(filteredRatings);
}

export { renderProducts, getByCategory, getByRating };
