import { Injectable } from '@nestjs/common';
import aiConfig from 'utils/aiConfig';
import instance from 'utils/axios';

@Injectable()
export class JiraService {
  async createJira(query) {
    const getData = await aiConfig.post('/', {
      promptText: query,
    });
    const resp = getData.data;
    const { data } = await instance.post('/issue', {
      fields: {
        project: {
          key: 'KAN',
        },
        summary: resp.Title,
        issuetype: {
          name: 'Task',
        },
        description: resp.Description,
      },
    });
    console.log(data);
    return 'Jira has been created for ' + query;
  }
}
