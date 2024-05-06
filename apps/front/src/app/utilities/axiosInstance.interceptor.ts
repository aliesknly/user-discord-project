'use client';
import axios from 'axios';
import { envs } from '../config'

const axiosInstance = axios.create({
  baseURL: `${envs.API_URL}:${envs.API_PORT}`,
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => error
);

export default axiosInstance;
