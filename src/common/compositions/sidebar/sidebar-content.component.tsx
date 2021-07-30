import React from 'react';

import { SidebarContentProps } from './types';

/**
 * Sidebar content block
 */

export function SidebarContent({children}: SidebarContentProps): JSX.Element {
  return (
    <div className={'ui-sidebar__content'}>
      { children }
    </div>
  );
}
