const success = message => {
  return { status: 200, message: message ? message : 'success' }
}

const badRequest = message => {
  return { status: 400, message: message ? message : 'Bad Request' }
}

const serverError = message => {
  return { status: 500, message: message ? message : 'Interval Server Error' }
}

export {
  success,
  badRequest,
  serverError
}
