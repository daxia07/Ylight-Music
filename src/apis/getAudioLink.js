import axios from 'axios';

const {REACT_APP_CORS} = process.env

export default axios.create({
  baseURL: `${REACT_APP_CORS}https://server.ylight.xyz`,
  // baseURL: 'https://ylight.glitch.me',
});
