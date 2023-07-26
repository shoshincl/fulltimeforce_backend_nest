import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('repositories')
  getRepositories() {
    return this.appService.getUserRepositories();
  }

  @Get('commits/:repo_name')
  getCommits(@Param('repo_name') repo_name: string) {
    return this.appService.getRepoCommits(repo_name);
  }
}
