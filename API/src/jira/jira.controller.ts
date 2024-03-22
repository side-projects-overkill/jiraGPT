import { Body, Controller, Post } from '@nestjs/common';
import { JiraService } from './jira.service';

@Controller('jira')
export class JiraController {
  constructor(private readonly jiraService: JiraService) {}
  @Post()
  jira(@Body() body) {
    return this.jiraService.createJira(body.query);
  }
}
