import axios from 'axios';
import jwt from 'jsonwebtoken';

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};
let instance = axios.create(defaultOptions);

async function getAccessToken() {
  let decoded = jwt.decode(localStorage.getItem('accessToken'));
  let timeThreshold = Date.now() + 120000; // Current time plus 2 minutes
  const exp = decoded.exp * 1000;

  if(exp < timeThreshold) {
     //TODO: Fetch refresh token and generate new access token
  }
  return token;
}
instance.interceptors.request.use(async function(config) {
  try {
    config.headers.Authorization = 'Bearer ' + await getAccessToken();
  } catch (error) {
    console.log(error);
    return false;
  }
  return config;
});
export default instance;
