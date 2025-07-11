const FETCH_SUCCESS_RATE: number = 0.75

function isFetchSuccessful(): boolean {
  return Math.random() < FETCH_SUCCESS_RATE
}

export default isFetchSuccessful
