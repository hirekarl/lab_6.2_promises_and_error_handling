import Product from "./types/Product"
import mockProducts from "./data/mockProducts"

import ProductReview from "./types/ProductReview"
import mockProductReviews from "./data/mockProductReviews"

const FETCH_SUCCESS_RATE: number = 0.75
const FETCH_PRODUCT_DELAY: number = 1000
const FETCH_PRODUCT_REVIEW_DELAY: number = 1500

function isFetchSuccessful(): boolean {
  return Math.random() < FETCH_SUCCESS_RATE
}

function fetchProductCatalog(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFetchSuccessful()) {
        resolve(mockProducts)
      } else {
        reject("Failed to fetch product catalog.")
      }
    }, FETCH_PRODUCT_DELAY)
  })
}

function fetchProductReviews(productId: number): Promise<ProductReview[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFetchSuccessful()) {
        const productReviews: ProductReview[] = mockProductReviews.filter(
          (review) => review.product_id == productId
        )
        resolve(productReviews)
      } else {
        reject(
          `Failed to fetch product reviews for product with id ${productId}.`
        )
      }
    }, FETCH_PRODUCT_REVIEW_DELAY)
  })
}

function fetchSalesReport() {
  /* TODO */
}

export { fetchProductCatalog, fetchProductReviews, fetchSalesReport }
