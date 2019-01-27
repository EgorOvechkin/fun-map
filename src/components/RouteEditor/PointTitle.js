import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

const SortablePoint = SortableElement((props) =>
  <li>
    {props.title}
    <span onClick={props.deletePoint}>[x]</span>
  </li>
)

function PointTitle(props) {
  return (
    <SortablePoint title={props.title} index={props.index} deletePoint={props.deletePoint}/>
  )
}

export default PointTitle;
