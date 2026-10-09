import type { Experience } from '@/common/compositions/bar/types';
import type { ContactProps } from '@/common/compositions/contact/types';
import type { HeroProps } from '@/common/compositions/hero/types';
import type { Info } from '@/common/compositions/resume/types';
import type { Knowledge, Language, Person, Skill } from '@/common/compositions/sidebar/types';

type Collection<T> = {
  collection: T[];
  title: string;
};

/**
 * Shape of public/data/content.json
 */

export type Content = {
  contacts: ContactProps['contacts'];
  experience: Experience[];
  hero: HeroProps;
  knowledge: Collection<Knowledge>;
  languages: Collection<Language>;
  person: Person[];
  personal: {
    avatar: string;
    name: string;
    sentence: string;
    title: string;
  };
  resume: Info[];
  skills: Collection<Skill>;
};
