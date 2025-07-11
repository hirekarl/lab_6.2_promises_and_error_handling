import Product from "../types/Product"
import ProductReview from "../types/ProductReview"
import SalesReport from "../types/SalesReport"

import mockProducts from "../data/mockProducts"
import mockProductReviews from "../data/mockProductReviews"
import mockSalesReport from "../data/mockSalesReport"

import attemptFetch from "../utils/attemptFetch"

const FETCH_PRODUCT_DELAY: number = 1000
const FETCH_PRODUCT_REVIEW_DELAY: number = 1500
const FETCH_SALES_REPORT_DELAY: number = 1000

function fetchProductCatalog(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        attemptFetch("Product catalog")
        resolve(mockProducts)
      } catch (error) {
        reject(error)
      }
    }, FETCH_PRODUCT_DELAY)
  })
}

function fetchProductReviews(productId: number): Promise<ProductReview[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        attemptFetch(`Product with ID ${productId}`)
        const productReviews: ProductReview[] = mockProductReviews.filter(
          (review) => review.product_id === productId
        )
        resolve(productReviews)
      } catch (error) {
        reject(error)
      }
    }, FETCH_PRODUCT_REVIEW_DELAY)
  })
}

function fetchSalesReport(): Promise<SalesReport> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        attemptFetch("Sales report")
        resolve(mockSalesReport)
      } catch (error) {
        reject(error)
      }
    }, FETCH_SALES_REPORT_DELAY)
  })
}

export { fetchProductCatalog, fetchProductReviews, fetchSalesReport }
