import React from 'react';
import './styles/RouteEditor.css';

function RouteEditor(props) {
  return (
    <div className='route-editor'>
      {props.children}
    </div>
  );
}

export default RouteEditor;
