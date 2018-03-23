import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  return config;
}, error => {
  // Do something with request error
  console.log(error,'error') // for debug
  Promise.reject(error)
});

// respone interceptor
service.interceptors.response.use(
  response => {
    console.log(response,'success')
    return response;
  },
  error => {
    console.log('err' + error,'error2')// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })
export default service
