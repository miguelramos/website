import React from 'react';

import { SidebarKnowledgeProps, SidebarKnowledgeListProps } from './types';

/**
 * Knowledge list info
 */

function SidebarKnowledgeList({ list = [] }: SidebarKnowledgeListProps): JSX.Element {
  return (
    <ul className={'ui-sidebar__knowledge-list'}>
      {
        list && list.map(({ description, id}) => (
          <li key={id} className={'ui-sidebar__knowledge-item'}>
            <i className={'ui-check'} /> <span>{description}</span>
          </li>
        ))
      }
    </ul>
  );
}

/**
 * Knowledge block
 */

export function SidebarKnowledge({ items, title }: SidebarKnowledgeProps): JSX.Element {
  return (
    <div className={'ui-sidebar__knowledge'}>
      <h6 className={'ui-sidebar__knowledge-title'}>
        {title}
      </h6>

      <SidebarKnowledgeList list={items} />
    </div>
  );
}
