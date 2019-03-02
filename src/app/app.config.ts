import { environment } from '@dev/env/environment';

export const CONFIGURATION = {
  PRODUCTION: environment.production,
  DEFAULT_LANG: 'pt',
  DOMAINS_API: [
    { HOST: '', KEY: '@local' },
    { HOST: environment.github, KEY: '@github' }
  ],
  ENDPOINTS: {
    PROFILE: '@local:/assets/json/profile.json',
    GITHUB: {
      USER: '@github:/users/:user',
      REPOS: '@github:/user/repos',
      STATISTICS: '@github:/repos/:owner/:repo/stats/contributors',
      EVENTS: '@github:/users/:user/events'
    }
  }
};
