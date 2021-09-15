import axios from 'axios'

const api = axios.create({
  baseURL: 'https://orange-space.herokuapp.com/api/v1',
})

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
