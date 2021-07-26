import React from 'react';

import { LinearProps } from './types';

/**
 * Linear progress component
 */

function Linear({ amount = 0, height = 10 }: LinearProps): JSX.Element {
  const styleProps = {
    '--ui-linear-amount': `${amount}%`,
    '--ui-linear-height': `${height}px`, 
  };

  return (
    <div className={'ui-linear'} style={styleProps}>
      <div className={'ui-linear__progress'} />
    </div>
  );
}

export default Linear;