import { Injectable } from '@nestjs/common';

@Injectable()
export class JiraService {
  getJira() {
    return 'This is your jira';
  }
}
