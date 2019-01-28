import React, { Component } from 'react';
import PointsList from './PointsList';
import PointInput from './PointInput';

function RouteEditor(props) {
  return (
    <div>
      <PointInput addPoint={props.addPoint}/>
      <PointsList titles={props.titles} onSortEnd={props.movePoint} deletePoint={props.deletePoint}/>
    </div>
  )
}

export default RouteEditor;
