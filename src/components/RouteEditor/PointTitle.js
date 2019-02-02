import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { ReactComponent as DeleteIcon } from '../../remove_icon.svg';
import './styles/PointTitle.css';

const SortablePoint = SortableElement((props) =>
  <li className='point-title-container'>
    <span>{props.title}</span>
    <DeleteIcon className='point-delete-button' onClick={props.deletePoint} />
  </li>
)

function PointTitle(props) {
  return (
    <SortablePoint title={props.title} index={props.index} deletePoint={props.deletePoint}/>
  )
}

export default PointTitle;
