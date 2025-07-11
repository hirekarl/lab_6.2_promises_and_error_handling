import ProductReview from "../types/ProductReview"

const mockProductReviews: ProductReview[] = [
  {
    product_id: 0,
    product_name: "Fidget Spinner",
    customer_id: 0,
    customer_name: "Alice",
    product_review: "It was okay.",
    product_rating: 3,
  },
  {
    product_id: 0,
    product_name: "Fidget Spinner",
    customer_id: 1,
    customer_name: "Bob",
    product_review: "I loved it!",
    product_rating: 5,
  },
  {
    product_id: 1,
    product_name: "Toy Car",
    customer_id: 0,
    customer_name: "Alice",
    product_review: "Best thing ever.",
    product_rating: 5,
  },
  {
    product_id: 1,
    product_name: "Toy Car",
    customer_id: 1,
    customer_name: "Bob",
    product_review: "Not really my thing.",
    product_rating: 2,
  },
  {
    product_id: 2,
    product_name: "Space Elevator",
    customer_id: 0,
    customer_name: "Alice",
    product_review: "Way too expensive.",
    product_rating: 1,
  },
  {
    product_id: 2,
    product_name: "Space Elevator",
    customer_id: 1,
    customer_name: "Bob",
    product_review: "I'll wait till it's on sale.",
    product_rating: 4,
  },
]

export default mockProductReviews
