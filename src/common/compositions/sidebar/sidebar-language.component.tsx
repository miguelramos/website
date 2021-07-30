import React from 'react';

import { Circular } from '@/common/components';

import { SidebarLanguageProps, SidebarLanguageListProps } from './types';

/**
 * Languages list info
 */

function SidebarLanguageList({ list = [] }: SidebarLanguageListProps) {
  return (
    <ul className={'ui-sidebar__lang-list'}>
      {
        list && list.map(({ amount, deegre, id, label }) => (
          <li key={id} className={'ui-sidebar__lang-item'}>
            <Circular amount={amount} deegres={deegre} />

            <p>{label}</p>
          </li>
        ))
      }
    </ul>
  );
}

/**
 * Language block
 */

export function SidebarLanguage({ languages, title }: SidebarLanguageProps): JSX.Element {
  return (
    <div className={'ui-sidebar__lang'}>
      <h6 className={'ui-sidebar__lang-title'}>
        {title}
      </h6>

      <SidebarLanguageList list={languages} />
    </div>
  );
}
