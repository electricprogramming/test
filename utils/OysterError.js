class OysterError extends Error {
  constructor(message) {
    super(message); // Call the parent class constructor
    this.name = 'OysterError'; // Custom error name
    Error.captureStackTrace(this, this.constructor); // Capture stack trace for debugging
  }
}
export default OysterError;
