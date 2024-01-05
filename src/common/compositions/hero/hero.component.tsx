import React from 'react';

import { HeroProps } from './types';

export function Hero({ description, info, sentences, title }: HeroProps): JSX.Element {
  return (
    <div className={'ui-hero'}>
      <div className={'ui-hero__container'}>
        <div className={'ui-hero__left'}></div>

        <div className={'ui-hero__right'}>
          <h1 className={'ui-hero__container-title'}>{title}</h1>
          <p className={'ui-hero__container-info'}>{info}</p>
          <p className={'ui-hero__container-description'}>{description}</p>
        </div>
      </div>
    </div>
  );
}
