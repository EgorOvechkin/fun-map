import React from 'react';
import PointTitle from './PointTitle';
import { SortableContainer } from 'react-sortable-hoc';

function PointsList(props) {
  return (
    <ul>
      {props.titles.map((title, index) => (
        <PointTitle key={`item-${index}`} index={index} title={title} />
      ))}
    </ul>
  );
}

export default SortableContainer(PointsList);
