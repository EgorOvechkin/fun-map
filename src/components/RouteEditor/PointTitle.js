import React, { PureComponent } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { ReactComponent as DeleteIcon } from '../../remove_icon.svg';
import './styles/PointTitle.css';

const SortablePoint = SortableElement((props) =>
  <li className='point-title-container'>
    <span className='point-title'>{props.title}</span>
    <DeleteIcon className='point-delete-button' onClick={props.deletePoint} />
  </li>
)

class PointTitle extends PureComponent {
  constructor(props) {
    super(props)
    this.deletePoint = () => this.props.deletePoint(this.props.index)
  }

  render() {
    return (
      <SortablePoint title={this.props.title} index={this.props.index} deletePoint={this.deletePoint}/>
    )
  }
}

export default PointTitle;
