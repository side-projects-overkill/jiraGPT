import { Injectable } from '@nestjs/common';
import instance from 'utils/axios';

@Injectable()
export class JiraService {
  async createJira(query) {
    const { data } = await instance.post('/issue', {
      fields: {
        project: {
          key: 'CHAT',
        },
        summary: 'flow broken',
        issuetype: {
          name: 'Task',
        },
        description: 'Something',
      },
    });
    console.log(data);
    return 'Jira has been created for ' + query;
  }
}
