import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://ecommerce-api-ten-jade.vercel.app/api/v1",

  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (logindata) => {
    const token = localStorage.getItem("token");

    if (token) {
      logindata.headers.Authorization = `Bearer ${token}`;
    }

    return logindata;
  },
);

export default apiClient;