const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://localhost:3000/api/v1/',
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
