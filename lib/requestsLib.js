import axios from 'axios/index';
import { apiURL } from '../appConfig';

export const buildAxios = (extraHeaders = {}) => {
  return axios.create({
    baseURL: apiURL,
    timeout: 5000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
  });
};
