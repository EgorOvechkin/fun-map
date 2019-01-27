import React from 'react';
import PointTitle from './PointTitle';
import { SortableContainer } from 'react-sortable-hoc';

const SortableList = SortableContainer((props) =>
  <ul>
    {props.titles.map((title, index) => (
      <PointTitle key={`item-${index}`} index={index} title={title} deletePoint={() => props.deletePoint(index)}/>
    ))}
  </ul>
);

function PointsList(props) {
  return (
    <SortableList titles={props.titles} deletePoint={props.deletePoint} distance={5} />
  )
}

export default PointsList;
