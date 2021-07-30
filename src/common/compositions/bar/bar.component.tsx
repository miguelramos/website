import React from 'react';

import { BarListProps, BarProps } from './types';

function BarList({ list = [] }: BarListProps): JSX.Element {
  return (
    <ul className={'ui-bar__container'}>
      {
        list && list.map(({ id, label, year }) => (
          <li key={id}><span className={'ui-bar__years'}>{year}</span> <span className={'ui-bar__label'}>{label}</span></li>
        ))
      }
    </ul>
  );
}

export function Bar({ experiences }: BarProps): JSX.Element {
  return (
    <div className={'ui-bar'}>
      <BarList list={experiences} />
    </div>
  );
}