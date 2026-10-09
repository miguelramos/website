import type { JSX } from 'react';

import { Card } from '@/common/components';

import { ResumeListProps, ResumeProps } from './types';

function CardList({ list = [] }: ResumeListProps): JSX.Element {
  return (
    <>
      {
        list && list.map(({ description, id, info, links, time, title }) => (
          <Card key={id} description={description} info={info} links={links} time={time} title={title} />
        ))
      }
    </>
  );
}

export function Resume({ resumes }: ResumeProps): JSX.Element {
  return (
    <div className={'ui-resume'}>
      <CardList list={resumes} />
    </div>
  );
}
