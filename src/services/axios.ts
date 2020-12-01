import axios from "axios";
const AxiosInstance = (history = {} as any) => {
  const baseURL = 'http://localhost:8888';

  let headers = {} as any;

  if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`;
  }

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403) {
        localStorage.removeItem("token");
        if(history) {
            history && history.push("/auth/login");
        } else {
          window.location.href = "/auth/login";
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};

const AxiosAuthInstance =()=>{
  const baseURl = 'https://oauth2.googleapis.com/'
  const axiosAuthInstance = axios.create({
    baseURL: baseURl,
  });

  return axiosAuthInstance;
}

export {AxiosAuthInstance, AxiosInstance};