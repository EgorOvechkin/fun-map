import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import './styles/PointTitle.css'

const SortablePoint = SortableElement((props) =>
  <li className='point-title-container'>
    {props.title}
    <span className='point-delete-button' onClick={props.deletePoint}>[x]</span>
  </li>
)

function PointTitle(props) {
  return (
    <SortablePoint title={props.title} index={props.index} deletePoint={props.deletePoint}/>
  )
}

export default PointTitle;
