import React from 'react';
import PointTitle from './PointTitle';
import { SortableContainer } from 'react-sortable-hoc';
import './styles/PointsList.css'

const SortableList = SortableContainer((props) =>
  <ul className='points-list'>
    {props.titles.map((title, index) => {
      const deletePoint = () => props.deletePoint(index)
      return (<PointTitle key={`item-${index}`} index={index} title={title} deletePoint={deletePoint}/>)
    })}
  </ul>
);

function PointsList(props) {
  return (
    <SortableList titles={props.titles} deletePoint={props.deletePoint} onSortEnd={props.onSortEnd} distance={5} />
  )
}

export default PointsList;
