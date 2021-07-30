import React from 'react';

import { CardProps } from './types';

function Card({ description, info, time, title }: CardProps): JSX.Element {
  return (
    <div className={'ui-card'}>
      <header className={'ui-card__head'}>
        <div className={'ui-card__side'}>
          <h1 className={'ui-card__title'}>{title}</h1>
          { info && (<p className={'ui-card__info'}>{info}</p>)}
        </div>

        { time && (<span className={'ui-card__date'}>{time}</span>)}
      </header>

      <article className={'ui-card__description'}>{ description }</article>
    </div>
  );
}

export default Card;
