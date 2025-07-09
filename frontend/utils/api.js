import axios from "axios";

const API = axios.create({
  baseURL: "/api/v1", // React proxy will send to http://localhost:5000
  withCredentials: true // If using cookies or login auth
});

export default API;
