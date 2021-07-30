export type SidebarProps = {
  children: JSX.Element|JSX.Element[];
};

export type Person = {
  id: number;
  label: string;
  value: string;
};

export type Language = {
  id: number;
  label: string;
  amount: number;
  deegre: number;
}

export type Skill = {
  amount: number;
  id: number;
  label: string;
}

export type Knowledge = {
  id: number;
  description: string;
}

export type SidebarAvatarProps = {
  children: JSX.Element|JSX.Element[];
  picture: string;
};

export type SidebarNameProps = {
  name: string;
};

export type SidebarTitleProps = {
  title: string;
};

export type SidebarContentProps = {
  children: JSX.Element|JSX.Element[];
}

export type SidebarPersonProps = {
  persons: Person[];
}

export type SidebarPersonListProps = {
  list: Person[];
}

export type SidebarLanguageProps = {
  languages: Language[];
  title: string;
}

export type SidebarLanguageListProps = {
  list: Language[];
}

export type SidebarSkillProps = {
  skills: Skill[];
  title: string;
}

export type SidebarSkillListProps = {
  list: Skill[];
  height?: number;
}

export type SidebarKnowledgeProps = {
  items: Knowledge[];
  title: string;
}

export type SidebarKnowledgeListProps = {
  list: Knowledge[];
}

export type SidebarFooterProps = {
  children: JSX.Element|JSX.Element[];
};
