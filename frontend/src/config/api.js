
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // your backend base URL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt"); // or wherever you store your JWT
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
export const API_BASE_URL ="http://localhost:8080"







//**************************ye sahi he niche ka  */

// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080",
//   withCredentials: true, // optional, for cookies
// });

// // Automatically attach token to every request
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("jwt"); // ya Redux se le, agar stored hai
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export const API_BASE_URL = "http://localhost:8080";
// export default api;
