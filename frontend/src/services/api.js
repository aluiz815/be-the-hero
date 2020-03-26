import axios from 'axios'

const api = axios.create({
  baseURL:"http://34.95.200.46:3333"
})

export default api