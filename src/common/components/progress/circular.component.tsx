import React from 'react';

import { CircularProps } from './types';

/**
 * Circular progress component
 */

function Circular({
  amount,
  deegres = 180,
  fontSize = 0.875,
  height = 50,
  width = 50
}: CircularProps): JSX.Element {
  const styleProps = {
    '--ui-circular-background': 'var(--ui-color-black-one)',
    '--ui-circular-color': 'var(--ui-color-warning)',
    '--ui-circular-deegres': `${deegres}deg`,
    '--ui-circular-font-size': `${fontSize}rem`,
    '--ui-circular-height': `${height}px`,
    '--ui-circular-width': `${width}px`
  };

  return (
    <div className={'ui-circular'} style={styleProps}>
      <div className={'ui-circle'}>

        <div className={'ui-circle__mask ui-circle__full'}>
          <div className={'ui-circle__fill'} />
        </div>

        <div className={'ui-circle__mask ui-circle__half'}>
          <div className={'ui-circle__fill'} />
        </div>

        <div className={'ui-circle__content'}>
          <span>{amount}%</span>
        </div>

      </div>
    </div>
  );
}

export default Circular;
