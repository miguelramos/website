import React from 'react';

import { SidebarFooterProps } from './types';

/**
 * Footer block
 */

export function SidebarFooter({ children }: SidebarFooterProps): JSX.Element {
  return (
    <div className={'ui-sidebar__footer'}>
      { children }
    </div>
  );
}
