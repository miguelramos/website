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

export interface ProfessionalResourceInterface {
  from: string;
  to: string;
  company: string;
  description: string;
  tasks: string[];
  tecs: string[];
}
