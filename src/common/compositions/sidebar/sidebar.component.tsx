import React from 'react';

import { SidebarAvatar } from './sidebar-avatar.component';
import { SidebarContent } from './sidebar-content.component';
import { SidebarFooter } from './sidebar-footer.component';
import { SidebarKnowledge } from './sidebar-knowledge.component';
import { SidebarLanguage } from './sidebar-language.component';
import { SidebarPerson } from './sidebar-person.component';
import { SidebarSkill } from './sidebar-skill.component';
import { SidebarProps } from './types';

/**
 * Sidebar module container
 */

export function Sidebar({ children }: SidebarProps): JSX.Element {
  return (
    <div className={'ui-sidebar'}>
      { children }
    </div>
  );
}

Sidebar.Content = SidebarContent;
Sidebar.Avatar = SidebarAvatar;
Sidebar.Footer = SidebarFooter;
Sidebar.Language = SidebarLanguage;
Sidebar.Person = SidebarPerson;
Sidebar.Skill = SidebarSkill;
Sidebar.Knowledge = SidebarKnowledge;
