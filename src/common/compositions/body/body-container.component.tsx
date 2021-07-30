import React from 'react';

import { BodyProps } from './types';

export function BodyContainer({ children }: BodyProps): JSX.Element {
  return (
    <div className={'ui-body__container'}>
      { children }
    </div>
  );
}