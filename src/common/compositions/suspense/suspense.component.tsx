import React from 'react';

export function Suspense({hasError = false}: { hasError: boolean }): JSX.Element {
  return (
    <div className={'ui-loading'}>
      <div className={'ui-ring'}>
        <div />
        <div />
        <div />
        <div />
      </div>

      { hasError && <p className={'ui-loading__error'}>{'Something went wrong :(!'}</p>}
    </div>
  );
}