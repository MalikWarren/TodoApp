
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios error:", error);
    if (error.code === "ERR_NETWORK") {
      console.error("Network error. Is the backend server running?");
    }
    return Promise.reject(error);
  }
);

export default instance;


