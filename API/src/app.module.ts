import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JiraModule } from './jira/jira.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), JiraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
