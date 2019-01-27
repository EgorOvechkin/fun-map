import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

function PointTitle(props) {
  return (
    <li>{props.title}</li>
  )
}

export default SortableElement(PointTitle);
