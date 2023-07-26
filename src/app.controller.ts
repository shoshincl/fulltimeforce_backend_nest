import { Controller, Get } from '@nestjs/common';

@Controller({})
export class AppController {
  @Get()
  getCommits() {
    return 'fetch repo commits';
  }
}
