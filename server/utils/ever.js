export default function ever(promise) {
  return promise
    .then(data => {
      return [null, data]
    })
    .catch(error => [error])
}
