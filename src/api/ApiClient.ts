import axios from 'axios';

// Create axios client, pre-configured with baseURL
let axiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/benirvingplt/products/',
  timeout: 60000,
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (token: string) => {
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer' + token;
};

export const attachAxiosInterceptor = () => {
  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const originalRequest = error.config;
      console.log('Error occurred in URL ' + originalRequest.url);
      if (
        error.response.status === 401 &&
        originalRequest.url !== 'Authorize'
      ) {
      }
      return Promise.reject(error);
    },
  );
};

export default axiosInstance;
