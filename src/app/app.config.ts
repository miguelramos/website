import { environment } from '@dev/env/environment';

export const CONFIGURATION = {
  PRODUCTION: environment.production,
  DEFAULT_LANG: 'pt',
  DOMAINS_API: [{ HOST: '', KEY: '@local' }],
  ENDPOINTS: {
    PROFILE: '@local:/assets/json/profile.json'
  }
};
