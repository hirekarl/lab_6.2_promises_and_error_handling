import isFetchSuccessful from "./isFetchSuccessful"
import DataError from "../errors/DataError"
import NetworkError from "../errors/NetworkError"

const COIN_FLIP_IS_HEADS = Math.random() < 0.5

function attemptFetch(itemToFetch: string): void {
  if (!isFetchSuccessful()) {
    if (COIN_FLIP_IS_HEADS) {
      throw new DataError(
        `There was a problem with the data returned from ${itemToFetch}.`
      )
    } else {
      throw new NetworkError(
        `A network error prevented fetch of ${itemToFetch}.`
      )
    }
  }
}

export default attemptFetch
