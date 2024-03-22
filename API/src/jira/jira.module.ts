import { Module } from '@nestjs/common';
import { JiraController } from './jira.controller';
import { JiraService } from './jira.service';

@Module({
  controllers: [JiraController],
  providers: [JiraService],
})
export class JiraModule {}
