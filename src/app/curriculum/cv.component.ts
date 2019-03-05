import { Component, OnInit } from '@angular/core';

import { GitlabService } from '../services/gitlab.service';
import { GithubService } from '../services/github.service';
import { Observable, forkJoin, of } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'dev-cv',
  styleUrls: ['./cv.component.scss'],
  templateUrl: './cv.component.html'
})
export class CvComponent implements OnInit {
  public loading = true;
  public activity$: Observable<
    { name: string; series: { name: string; value: number }[] }[]
  >;

  constructor(
    private readonly githubService: GithubService,
    private readonly gitlabService: GitlabService
  ) {}

  ngOnInit(): void {
    this.activity$ = forkJoin(
      this.githubService.getStatistics(),
      this.gitlabService.getEvents()
    ).pipe(
      tap(() => (this.loading = false)),
      flatMap(args => of([].concat(args[0], args[1])))
    );
  }
}
