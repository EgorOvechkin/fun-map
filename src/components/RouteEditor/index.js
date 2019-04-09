import React, { Component } from 'react';
import PointsList from './PointsList';
import PointInput from './PointInput';
import './styles/index.css'

class RouteEditor extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.titles.toString() !== nextProps.titles.toString();
  }

  render() {
    return (
      <div className='route-editor'>
        <PointInput addPoint={this.props.addPoint} />
        <PointsList titles={this.props.titles} onSortEnd={this.props.movePoint} deletePoint={this.props.deletePoint} />
      </div>
    )
  }
}

export default RouteEditor;
