import React, { Component } from 'react';
import PointsList from './PointsList';
import PointInput from './PointInput';
import './styles/index.css'

class RouteEditor extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.points.map(point => point.title).join() !== nextProps.points.map(point => point.title).join()
  }

  render() {
    return (
      <div className='route-editor'>
        <PointInput addPoint={this.props.addPoint} />
        <PointsList points={this.props.points} onSortEnd={this.props.movePoint} deletePoint={this.props.deletePoint} />
      </div>
    )
  }
}

export default RouteEditor;
