import { axios } from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com',
});

instance.defaults.baseURL = 'https://api.example.com';
instance.defaults.headers.post['Content-Type'] = 'application/json';
