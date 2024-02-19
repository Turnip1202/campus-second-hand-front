import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
});
export class TKRequest {
  static post = axiosInstance.post;
  static get = axiosInstance.get;
  static put = axiosInstance.put;
  static delete = axiosInstance.delete;
  static patch = axiosInstance.patch;
  static head = axiosInstance.head;
  static options = axiosInstance.options;
  constructor() {
    return axiosInstance;
  }
}
export const postCommon = TKRequest.post;
export const getCommon = TKRequest.get;
