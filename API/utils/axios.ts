import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://redhat-exd.atlassian.net/rest/api/latest/',
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
