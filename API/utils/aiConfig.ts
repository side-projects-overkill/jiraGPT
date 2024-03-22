import axios from 'axios';

const aiConfig = axios.create({
  baseURL: 'http://localhost:3001/api/generate',
});

aiConfig.defaults.headers.post['Content-Type'] = 'application/json';

export default aiConfig;
