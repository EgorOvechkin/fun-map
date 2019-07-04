import React from 'react';
import { ReactComponent as Spinner } from '../icons/spinner.svg';

const Loader = (props) => (
  <div className='modal-loader'>
    <div className='spinner'>
      {/* <Spinner /> */}
      <div id="loading"></div>
      <p className='message'>{props.message}</p>
    </div>
  </div>
);

export default Loader;
