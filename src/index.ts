import Product from "./types/Product"
import ProductReview from "./types/ProductReview"
import SalesReport from "./types/SalesReport"

import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./api/apiSimulator"

const SPACE_ELEVATOR_PRODUCT_ID: number = 2

const currencyDisplayOptions: Intl.NumberFormatOptions = {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

main()

function main(): void {
  console.info("\nCommencing API operations...")
  fetchProductCatalog()
    .then((productCatalog: Product[]) => {
      console.log("\nProducts in catalog:")
      productCatalog.forEach((product) => {
        console.log(
          `- ID: ${product.id}, Name: ${
            product.name
          }, Price: ${product.price.toLocaleString(
            "en-US",
            currencyDisplayOptions
          )}`
        )
      })

      return fetchProductReviews(SPACE_ELEVATOR_PRODUCT_ID)
    })
    .then((productReviews: ProductReview[]) => {
      console.log(`\nReviews for product with ID ${SPACE_ELEVATOR_PRODUCT_ID}:`)
      productReviews.forEach((review) => {
        console.log(
          `- Product Name: ${review.product_name}, Reviewer: ${review.customer_name}, Review: ${review.product_review}`
        )
      })
      return fetchSalesReport()
    })
    .then((report: SalesReport) => {
      console.log("\nSales Report:")
      console.log(
        `- Total Sales: ${report.totalSales.toLocaleString(
          "en-US",
          currencyDisplayOptions
        )}, Units Sold: ${report.unitsSold.toLocaleString(
          "en-US"
        )}, Average Price: ${report.averagePrice.toLocaleString(
          "en-US",
          currencyDisplayOptions
        )}`
      )
    })
    .catch((error) => {
      console.error(`\nError: ${error}`)
    })
    .finally(() => {
      console.info("\n...API operations completed.\n")
    })
}
