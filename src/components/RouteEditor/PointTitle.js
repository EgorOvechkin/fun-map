import React, { PureComponent } from 'react';
import './styles/PointTitle.css';
import SortablePoint from './SortablePoint';

class PointTitle extends PureComponent {
  constructor(props) {
    super(props);
    this.deletePoint = () => this.props.deletePoint(this.props.index);
  }

  render() {
    return (
      <SortablePoint title={this.props.title} index={this.props.index} deletePoint={this.deletePoint} />
    );
  }
}

export default PointTitle;
