export function errorWith(errorMessage) {
  return { hasError: true, message: errorMessage }
}

export function noError() {
  return { hasError: false, message: '' }
}
