import React from 'react';
import PropTypes from 'prop-types';
import { SortableElement } from 'react-sortable-hoc';
import { ReactComponent as DeleteIcon } from '../../icons/remove_icon.svg';

const SortablePoint = SortableElement((props) =>
  <li className='point-title-container'>
    <span className='point-title'>{props.title}</span>
    <DeleteIcon className='point-delete-button' onClick={props.deletePoint} />
  </li>
);

SortablePoint.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number.isRequired,
  deletePoint: PropTypes.func
};

export default SortablePoint;
