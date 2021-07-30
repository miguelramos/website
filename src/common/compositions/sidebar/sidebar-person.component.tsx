import React from 'react';

import { SidebarPersonProps, SidebarPersonListProps } from './types';

/**
 * Person list info
 */

function SidebarPersonList({ list = [] }: SidebarPersonListProps): JSX.Element {
  return (
    <ul className={'ui-sidebar__person-list'}>
      {
        list && list.map(({ id, label, value }) => (
          <li key={id} className={'ui-sidebar__person-item'}>
            <p>{ label }</p>
            <p>{ value }</p>
          </li>
        ))
      }
    </ul>
  );
}

/**
 * Person block
 */

export function SidebarPerson({ persons }: SidebarPersonProps): JSX.Element {
  return (
    <div className={'ui-sidebar__person'}>
      <SidebarPersonList list={persons} />
    </div>
  );
}
