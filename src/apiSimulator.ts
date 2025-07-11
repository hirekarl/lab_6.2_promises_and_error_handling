const FETCH_PRODUCT_DELAY: number = 1000

type Product = {
  id: number
  name: string
  price: number
}

const mockProducts: Product[] = [
  { id: 0, name: "Fidget Spinner", price: 12.99 },
  { id: 1, name: "Toy Car", price: 1.99 },
  { id: 2, name: "Space Elevator", price: 4999999999.99 },
]

function isFetchProductCatalogSuccessful(): boolean {
  return Math.random() < 0.5
}

function fetchProductCatalog(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFetchProductCatalogSuccessful()) {
        resolve(mockProducts)
      } else {
        reject("Failed to fetch product catalog.")
      }
    }, FETCH_PRODUCT_DELAY)
  })
}

function fetchProductReview() {
  /* TODO */
}

function fetchSalesReport() {
  /* TODO */
}

export { fetchProductCatalog, fetchProductReview, fetchSalesReport }
