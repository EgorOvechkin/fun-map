import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PointTitle from './PointTitle';
import { SortableContainer } from 'react-sortable-hoc';
import './styles/PointsList.css';

const SortableList = SortableContainer((props) =>
  <ul className='points-list'>
    {props.titles.map((title, index) => {
      return (<PointTitle key={`point-title-${index}`} index={index} title={title} deletePoint={props.deletePoint}/>);
    })}
  </ul>
);

class PointsList extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.titles.toString() !== nextProps.titles.toString();
  }

  render() {
    return (
      <SortableList
        titles={this.props.titles}
        deletePoint={this.props.deletePoint}
        onSortEnd={this.props.onSortEnd}
        distance={5}
      />
    );
  }
}

PointsList.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string),
  deletePoint: PropTypes.func,
  onSortEnd: PropTypes.func
};

export default PointsList;
