import 'dotenv/config';
import axios from 'axios';

const jiraApiInstance = axios.create({
  baseURL: `${process.env.JIRA_HOST}/rest/api/latest`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.JIRA_AUTH_KEY,
  },
});
console.log(process.env.JIRA_HOST);

jiraApiInstance.defaults.headers.post['Content-Type'] = 'application/json';

export default jiraApiInstance;
