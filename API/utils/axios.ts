import 'dotenv/config';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://redhat-exd.atlassian.net/rest/api/latest/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.AUTH_KEY,
  },
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
