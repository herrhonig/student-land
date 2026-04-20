import axios from "axios";

export const $api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/** force delay middleware: */
$api.interceptors.request.use(async (config) => {
  if (import.meta.env.DEV) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
  return config;
});

$api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  },
);
