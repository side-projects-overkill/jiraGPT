import { Injectable } from '@nestjs/common';
import aiConfig from 'utils/aiConfig';
import jiraApiInstance from 'utils/axios';
import logger from 'utils/logger';

@Injectable()
export class JiraService {
  async createJira(query) {
    const getData = await aiConfig.post('/', {
      promptText: query,
    });
    const resp = getData.data;
    const { data } = await jiraApiInstance.post('/issue', {
      fields: {
        summary: resp.Title as string,
        description: resp.Description as string,
        project: {
          key: process.env.PROJECT_KEY,
        },
        issuetype: {
          name: 'Task',
        },
      },
    });
    logger.log(data);
    return 'Jira has been created for ' + query;
  }
}
