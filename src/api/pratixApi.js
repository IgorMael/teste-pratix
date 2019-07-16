import axios from 'axios';

const pratixAPI = axios.create({
  baseURL: 'https://api.pratix.top/api',
  headers: { 'Content-Type': 'application/json' }
});

export default pratixAPI;
