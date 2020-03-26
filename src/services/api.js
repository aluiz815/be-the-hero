import axios from 'axios'
const api = axios.create({
  baseURL: "https://nodedeploy.andredeveloper.com.br"
})

export default api
