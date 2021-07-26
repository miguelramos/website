export type Info = {
  description: string;
  id: number;
  info: string;
  time: string;
  title: string;
}

export type ResumeProps = {
  resumes: Info[];
}

export type ResumeListProps = {
  list: Info[];
}
