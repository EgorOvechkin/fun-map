import React from 'react';
import PointTitle from './PointTitle';
import { SortableContainer } from 'react-sortable-hoc';
import './styles/PointsList.css'


const deletePoint = () => console.log('delete!')

const SortableList = SortableContainer((props) =>
  <ul className='points-list'>
    {props.points.map((point, index) => {
      // const deletePoint = () => props.deletePoint(index)
      return (<PointTitle key={`item-${index}`} index={index} title={point.title} deletePoint={deletePoint}/>)
    })}
  </ul>
);

function PointsList(props) {
  return (
    <SortableList points={props.points} deletePoint={props.deletePoint} onSortEnd={props.onSortEnd} distance={5} />
  )
}

export default PointsList;
