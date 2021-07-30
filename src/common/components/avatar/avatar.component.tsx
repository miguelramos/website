import React from 'react';

import { AvatarProps } from './types';

/**
 * Circular user image avatar
 *
 * @param picture - Avatar image url
 */

function Avatar({ picture }: AvatarProps): JSX.Element {
  return (
    <div className={'ui-avatar__content'}>
      <img
        alt={'Profile'}
        className={'ui-avatar'}
        src={picture}
      />

      <span className={'ui-avatar__badge'} />
    </div>
  );
}

export default Avatar;
