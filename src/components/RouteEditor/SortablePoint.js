import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { ReactComponent as DeleteIcon } from '../../icons/remove_icon.svg';

const SortablePoint = SortableElement((props) =>
  <li className='point-title-container'>
    <span className='point-title'>{props.title}</span>
    <DeleteIcon className='point-delete-button' onClick={props.deletePoint} />
  </li>
);

export default SortablePoint;
