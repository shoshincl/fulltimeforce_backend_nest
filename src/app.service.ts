import { Injectable, ForbiddenException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  async getRepoCommits() {
    return this.http
      .get(
        `${process.env.GITHUB_API_BASE_URL}/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/commits`,
        {
          headers: {
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          },
        },
      )
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
