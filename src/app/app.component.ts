import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { pluck, mergeAll } from 'rxjs/operators';
import {
  faMapMarkerAlt,
  faInfoCircle,
  faEnvelopeOpenText
} from '@fortawesome/free-solid-svg-icons';

import { JsonSpec } from '@dev/rest';
import { ProfileResourceInterface } from './app.typings';
import { GithubService } from './services/github.service';
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

  constructor(
    private readonly profileService: ProfileService,
    private readonly githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.profile$ = this.profileService.getProfile().pipe(pluck('attributes'));

    this.githubService.getStatistics().subscribe(response => console.dir(response));
  }
}
