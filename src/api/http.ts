import axios, { InternalAxiosRequestConfig } from "axios"
axios.defaults.baseURL = "/api"
axios.defaults.timeout = 10000
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8"

// 请求拦截器
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = window.sessionStorage.getItem("token")
    if (token) {
      ;(config.headers = config.headers || {}).token = token
    }
    return config
  },
  (error) => {
    throw error
  }
)
// 响应拦截器
axios.interceptors.response.use((res) => {
  return res.data
})

export default axios
