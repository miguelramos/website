import './theme/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <>
      <div className={'w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex'}>
        sidebar
      </div>
      <div className={'container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6'}>
        <div className={'w-full h-full rounded border-dashed border-2 border-gray-300'}>
          Content
        </div>
      </div>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
