import React from 'react';

import { BodyContainer } from './body-container.component';
import { BodyProps } from './types';

export function Body({ children }: BodyProps): JSX.Element {
  return (
    <div className={'ui-body'}>
      { children }
    </div>
  );
}

Body.Container = BodyContainer;