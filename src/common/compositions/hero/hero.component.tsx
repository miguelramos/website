import React, { useEffect, useState } from 'react';

import { HeroProps } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-function
function writer(sentences: string[] = [], fn = (sentence: string) => {}, loop = 0, period = 2000) {
  let isDeleting = false;
  let text = '';

  const tick = () => {
    const idx = loop % sentences.length;
    const sentence = sentences[idx];

    if (isDeleting) {
      text = sentence.substring(0, text.length - 1);
    } else {
      text = sentence.substring(0, text.length + 1);
    }

    fn(text);

    let delta = 200 - Math.random() * 100;

    if (isDeleting) { delta /= 2; }

    if (!isDeleting && text === sentence) {
      delta = period;
      isDeleting = true;
    } else if (isDeleting && text === '') {
      isDeleting = false;
      // eslint-disable-next-line no-param-reassign
      loop += 1;
      delta = 500;
    }

    setTimeout(() => {
      tick();
    }, delta);
  };

  tick();
}

export function Hero({ description, info, sentences, title }: HeroProps): JSX.Element {
  const [sentence, setSentence] = useState('');

  useEffect(() => {
  	writer(sentences, (text) => setSentence(text));
  }, [sentences]);
  
  return (
    <div className={'ui-hero'}>
      <div className={'ui-hero__container'}>
        <div className={'ui-hero__left'}>
          <p className={'ui-hero__writer'}>
            <span className={'ui-hero__code'}>{'<code>'}</span>
            <span>{sentence}</span>
            <span className={'ui-hero__code'}>{'</code>'}</span>
          </p>
        </div>

        <div className={'ui-hero__right'}>
          <h1 className={'ui-hero__container-title'}>{title}</h1>
          <p className={'ui-hero__container-info'}>{info}</p>
          <p className={'ui-hero__container-description'}>{description}</p>
        </div>
      </div>
    </div>
  );
}