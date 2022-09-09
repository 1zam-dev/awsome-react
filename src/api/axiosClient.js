import axios from "axios";

const BASE_URL = "https://ec489537-8d58-4c8d-9b1a-d801165f4b08.mock.pstmn.io";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

// instance.interceptors.response.use((response) => {
//   // Todo
// });

export default axiosClient;
