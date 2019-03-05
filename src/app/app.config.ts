import { environment } from '@dev/env/environment';

export const CONFIGURATION = {
  PRODUCTION: environment.production,
  DEFAULT_LANG: 'pt',
  DOMAINS_API: [
    { HOST: '', KEY: '@local' },
    { HOST: environment.github, KEY: '@github' },
    { HOST: environment.gitlab, KEY: '@gitlab' }
  ],
  ENDPOINTS: {
    PROFILE: '@local:/assets/json/profile.json',
    GITHUB: {
      USER: '@github:/users/:user',
      REPOS: '@github:/user/repos',
      STATISTICS: '@github:/repos/:owner/:repo/stats/contributors',
      EVENTS: '@github:/users/:user/events',
      STATIC: '@local:/assets/json/github.json'
    },
    GITLAB: {
      EVENTS: '@gitlab:/users/:id/events',
      STATIC: '@local:/assets/json/gitlab.json'
    },
    PROFESSIONAL: '@local:/assets/json/professional.json'
  }
};
