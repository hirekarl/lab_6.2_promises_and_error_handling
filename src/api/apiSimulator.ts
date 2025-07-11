import Product from "../types/Product"
import ProductReview from "../types/ProductReview"
import SalesReport from "../types/SalesReport"

import mockProducts from "../data/mockProducts"
import mockProductReviews from "../data/mockProductReviews"
import mockSalesReport from "../data/mockSalesReport"

import isFetchSuccessful from "../utils/isFetchSuccessful"

const FETCH_PRODUCT_DELAY: number = 1000
const FETCH_PRODUCT_REVIEW_DELAY: number = 1500
const FETCH_SALES_REPORT_DELAY: number = 1000

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
          (review) => review.product_id === productId
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

function fetchSalesReport(): Promise<SalesReport> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFetchSuccessful()) {
        resolve(mockSalesReport)
      } else {
        reject("Failed to fetch sales report.")
      }
    }, FETCH_SALES_REPORT_DELAY)
  })
}

export { fetchProductCatalog, fetchProductReviews, fetchSalesReport }
