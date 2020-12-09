import axios from 'axios';
import jwt from 'jsonwebtoken';
import { REFRESH_TOKEN_URL } from './urls';

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};
let instance = axios.create(defaultOptions);

async function fetchNewAccessToken() {
  try {
    let refreshToken = localStorage.getItem('refreshToken');
    let response = await axios({
      url: REFRESH_TOKEN_URL,
      method: 'POST',
      headers: {
        Authorization: refreshToken
      },
      data: null
    });
    let newAccessToken = response.data.payload.accessToken;
    let newRefreshToken = response.data.payload.refreshToken;
    localStorage.setItem('accessToken', newAccessToken);
    localStorage.setItem('refreshToken', newRefreshToken);
    return newAccessToken;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function getAccessToken() {
  let decoded = jwt.decode(localStorage.getItem('accessToken'));
  let timeThreshold = Date.now() + 120000; // Current time plus 2 minutes
  const exp = decoded.exp * 1000;

  if(exp < timeThreshold) {
     //TODO: Fetch refresh token and generate new access token
     try {
      let accessToken = await fetchNewAccessToken()
      return accessToken;
     } catch (err) {
       return null;
     }
  } else {
    return token;
  }
}
instance.interceptors.request.use(async function(config) {
  try {
    let token = await getAccessToken();
    if (token != null) {
      config.headers.Authorization = 'Bearer ' + token;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
  return config;
});
export default instance;
