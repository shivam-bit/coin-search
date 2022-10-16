class CustomError extends Error {
  constructor(statusCode = 400, errorMessage = 'Something went wrong') {
    super(errorMessage);
    this.statusCode = statusCode;
  }
}

export { CustomError };
