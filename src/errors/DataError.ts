class DataError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "DataError"
  }
}

export default DataError
