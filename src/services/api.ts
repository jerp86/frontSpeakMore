import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.13:3334',
});

export default api;
