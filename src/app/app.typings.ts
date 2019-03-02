export interface ProfileResourceInterface {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  localization: string;
  email: string;
  skills: {
    js: {
      name: string;
      value: number;
    };
  };
}
