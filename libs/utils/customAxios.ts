import axios from "axios";
import { API_BASE_URL } from "../const";

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 1000;

const getAxiosToken = (): string => {
  return `token-${Math.random() * 10 + 1}`;
};

const customAxios = axios.create({});

customAxios.interceptors.request.use((req) => {
  if (req.headers) {
    req.headers["Authorization"] = getAxiosToken();
  }
  return req;
});

customAxios.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);

export const postApi = (path: string, data: any) => {
  return customAxios.post(path, data).then((res) => res.data);
};
