import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: `https://lustore-api.onrender.com/api`,
})
