import axios from 'axios'

const request = axios.create({
  // config
})

/*
 * Request Interceptor
 *
 * */
request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

/*
 * Response Interceptor
 *
 * */
request.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default request
