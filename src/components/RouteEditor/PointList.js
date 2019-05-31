import React, { Component } from 'react';
import PointTitle from './PointTitle';
import { SortableContainer } from 'react-sortable-hoc';
import './styles/PointsList.css';

const SortableList = SortableContainer((props) =>
  <ul className='points-list'>
    {props.titles.map((title, index) => {
      return (<PointTitle key={`item-${index}`} index={index} title={title} deletePoint={props.deletePoint}/>);
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

export default PointsList;
