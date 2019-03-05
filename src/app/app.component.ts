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

  constructor(private readonly profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile$ = this.profileService.getProfile().pipe(pluck('attributes'));
  }
}
