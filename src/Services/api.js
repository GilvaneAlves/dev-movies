import axios from 'axios'
import { languages } from 'eslint-plugin-prettier'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/', // Replace with your API base URL
  params: {
    api_key: '789b779b4a5793273a951bd0dbb9961b',
    language: 'pt-BR',
    page: 1
  }
})
export default api
