import { Component, OnInit } from '@angular/core';

import { Observable, forkJoin, of } from 'rxjs';
import { pluck, mergeAll, flatMap } from 'rxjs/operators';
import {
  faMapMarkerAlt,
  faInfoCircle,
  faEnvelopeOpenText
} from '@fortawesome/free-solid-svg-icons';

import { JsonSpec } from '@dev/rest';
import { ProfileResourceInterface } from './app.typings';
import { GithubService } from './services/github.service';
import { GitlabService } from './services/gitlab.service';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public faInfoCircle = faInfoCircle;
  public faEnvelope = faEnvelopeOpenText;
  public faMapMarkerAlt = faMapMarkerAlt;
  public profile$: Observable<JsonSpec<ProfileResourceInterface>>;
  public activity$: Observable<
    { name: string; series: { name: string; value: number }[] }[]
  >;

  constructor(
    private readonly profileService: ProfileService,
    private readonly githubService: GithubService,
    private readonly gitlabService: GitlabService
  ) {}

  ngOnInit(): void {
    this.profile$ = this.profileService.getProfile().pipe(pluck('attributes'));

    this.activity$ = forkJoin(
      this.githubService.getStatistics(),
      this.gitlabService.getEvents()
    ).pipe(
      flatMap(args => of([].concat(args[0], args[1])))
    );
  }
}
