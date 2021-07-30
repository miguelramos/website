import React from 'react';

import { Avatar } from '@/common/components';

import { SidebarAvatarProps, SidebarNameProps, SidebarTitleProps } from './types';

/**
 * Sidebar avatar container
 */

export function SidebarAvatar({ children, picture }: SidebarAvatarProps): JSX.Element {
  return (
    <div className={'ui-avatar__container'}>
      <Avatar picture={picture} />

      { children }
    </div>
  );
}

/**
 * Avatar name
 */

function SidebarName({ name }: SidebarNameProps): JSX.Element {
  return (
    <h6 className={'ui-avatar__name'}>
      {name}
    </h6>
  );
}

/**
 * Avatar title
 */

function SidebarTitle({ title }: SidebarTitleProps): JSX.Element {
  return (
    <p className={'ui-avatar__title'}>
      { title }
    </p>
  );
}

SidebarAvatar.Name = SidebarName;
SidebarAvatar.Title = SidebarTitle;
