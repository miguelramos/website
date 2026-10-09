import type { CardLink } from '@/common/components/card/types';

export type Info = {
  description: string;
  id: number;
  info: string;
  links?: CardLink[];
  time: string;
  title: string;
};

export type ResumeProps = {
  resumes: Info[];
};

export type ResumeListProps = {
  list: Info[];
};
