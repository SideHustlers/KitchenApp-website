import axios from 'axios';
import jwt from 'jsonwebtoken';

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};
let instance = axios.create(defaultOptions);
instance.interceptors.request.use(async function(config) {
  try {

    config.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');
  } catch (error) {
    console.log(error);
    return false;
  }
  return config;
});
export default instance;
