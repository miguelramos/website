import { Component, OnInit } from '@angular/core';

import { GitlabService } from '../services/gitlab.service';
import { GithubService } from '../services/github.service';
import { Observable, forkJoin, of } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import { JsonSpec } from '@dev/rest';
import { ProfessionalResourceInterface } from '../app.typings';

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
  public professional$: Observable<JsonSpec<ProfessionalResourceInterface>[]>;

  constructor(
    private readonly githubService: GithubService,
    private readonly gitlabService: GitlabService,
    private readonly profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.activity$ = forkJoin(
      this.githubService.getStatistics(),
      this.gitlabService.getEvents()
    ).pipe(
      tap(() => (this.loading = false)),
      flatMap(args => of([].concat(args[0], args[1])))
    );

    this.professional$ = this.profileService.getProfessional();
  }
}
