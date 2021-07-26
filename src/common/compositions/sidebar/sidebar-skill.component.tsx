import React from 'react';

import { Linear } from '@/common/components';

import { SidebarSkillProps, SidebarSkillListProps } from './types';

/**
 * Skill list component
 */

function SidebarSkillList({ list = [], height = 4 }: SidebarSkillListProps): JSX.Element {
  return (
    <>
      {
        list && list.map(({ amount, id, label }) => (
          <div key={id} className={'ui-skill'}>
            <div className={'ui-skill__info'}>
              <p>{label}</p>
              <p>{amount}%</p>
            </div>

            <Linear amount={amount} height={height} />
          </div>
        ))
      }
    </>
  );
}

/**
 * Skills block
 */

export function SidebarSkill({ skills, title }: SidebarSkillProps): JSX.Element {
  return (
    <div className={'ui-sidebar__skill'}>
      <h6 className={'ui-sidebar__skill-title'}>
        { title }
      </h6>

      <SidebarSkillList list={skills} />

    </div>
  );
}
