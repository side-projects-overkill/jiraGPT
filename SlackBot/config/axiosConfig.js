const axios = require('axios');

const axiosConfigInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
module.exports = { axiosConfigInstance };
