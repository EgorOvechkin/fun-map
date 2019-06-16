import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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

PointTitle.propTypes = {
  title: PropTypes.string,
  deletePoint: PropTypes.func
};

export default PointTitle;
