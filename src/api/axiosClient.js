import axios from "axios";

const BASE_URL = "https://ec489537-8d58-4c8d-9b1a-d801165f4b08.mock.pstmn.io";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

// instance.interceptors.response.use((response) => {
//   // Todo
// });

axiosClient.interceptors.request.use(
  (request) => {
    try {
      //Get User's token from sessionStorage
      const token = sessionStorage.getItem("Token");

      // Apply User's token before sent request
      request.headers = {
        ...request.headers,
        Authorization: "Bearer " + token,
      };

      // return new request
      return request;
    } catch (error) {
      return error;
    }
  },
  (error) => {
    throw error;
  }
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response.message;

    if (error.response.status === 401) {
      // User'token is exp
      sessionStorage.removeItem("Token");
    }

    if (message) {
      //noti message
    }
    
    throw error;
  }
);

export default axiosClient;
