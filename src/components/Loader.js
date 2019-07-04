import React from 'react';

const Loader = (props) => (
  <div className='modal'>
    <div className='loader'>
      <div className='spinner'></div>
      <p className='message'>{props.message}</p>
    </div>
  </div>
);

export default Loader;
