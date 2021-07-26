import React from 'react';

import { ContactProps } from './types';

export function Contact({ contacts }: ContactProps): JSX.Element {
  return (
    <>
      {
        contacts && contacts.map(({ icon, id, link, title }) => (
          <a key={id} className={'ui-sidebar__link'} href={link}>
            <img alt={title} className={'ui-icon'} src={icon} />
          </a>
        ))
      }
    </>
  );
}
