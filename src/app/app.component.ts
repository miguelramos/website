import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import {
  faMapMarkerAlt,
  faInfoCircle,
  faEnvelopeOpenText
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faGitlab,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import { JsonSpec } from '@dev/rest';
import { ProfileResourceInterface } from './app.typings';
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
  public faGithub = faGithub;
  public faGitlab = faGitlab;
  public faTwitter = faTwitter;
  public faLinkedin = faLinkedin;
  public profile$: Observable<JsonSpec<ProfileResourceInterface>>;

  constructor(private readonly profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile$ = this.profileService.getProfile().pipe(pluck('attributes'));
  }
}
