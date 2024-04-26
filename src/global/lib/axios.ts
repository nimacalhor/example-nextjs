import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    "api-key": process.env.API_KEY,
  },
});

export default customAxios