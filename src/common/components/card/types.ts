export type CardLink = {
  link: string;
  title: string;
};

export type CardProps = {
  title: string;
  info?: string;
  description: string;
  time?: string;
  links?: CardLink[];
};
