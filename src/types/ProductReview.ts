import ProductRating from "./ProductRating"

type ProductReview = {
  product_id: number
  product_name: string
  customer_id: number
  customer_name: string
  product_review: string
  product_rating: ProductRating
}

export default ProductReview
