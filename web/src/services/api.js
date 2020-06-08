import axios from "axios";
import { AuthContext } from 'context/AuthProvider';

const api = axios.create();

api.interceptors.request.use(async config => {
  const { token } = AuthContext;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;