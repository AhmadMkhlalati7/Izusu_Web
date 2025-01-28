import axios from "axios";
import { env } from "process";
// import { getToken } from "./get-token";

const http = axios.create({
  baseURL: env.VITE_PUBLIC_API_URL,
  timeout: 24000,
  headers: { "Cache-Control": "no-cache" },
});

/**
 * To do
 * We need to send the jwt to api backend
 * currently both api and front end are insecure and donot use jwt
 */

// http.interceptors.request.use(
//   (config) => {
//     const token = getToken();
//     config.headers["Authorization"] = `Bearer ${token ? token : ""}`;
//     config.headers["Content-Type"] = "application/json";
//     config.headers["Accept"] = "application/json";
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default http;
