import React from 'react';
import PointsList from './PointsList';
import PointInput from './PointInput';
import './styles/index.css'

function RouteEditor(props) {
  return (
    <div className='route-editor'>
      <PointInput addPoint={props.addPoint} />
      <PointsList titles={props.titles} onSortEnd={props.movePoint} deletePoint={props.deletePoint} />
    </div>
  )
}

export default RouteEditor;
