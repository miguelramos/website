import React from 'react';

import { Card } from '@/common/components';

import { ResumeListProps, ResumeProps } from './types';

function CardList({ list = [] }: ResumeListProps): JSX.Element {
  return (
    <>
      {
        list && list.map(({ description, id, info, time, title }) => (
          <Card key={id} description={description} info={info} time={time} title={title} />
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
