import { axios } from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com',
});

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
