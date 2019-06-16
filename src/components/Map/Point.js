import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Placemark } from 'react-yandex-maps';

class Point extends Component {
  constructor(props) {
    super(props);
    this.onDrag = this.onDrag.bind(this);
  }

  onDrag(event) {
    this.props.onDrag(event.get('target').geometry.getCoordinates());
  }

  render() {
    return (
      <Placemark
        geometry={this.props.coordinates}
        onDrag={this.onDrag}
        modules={['geoObject.addon.balloon']}
        properties={{balloonContentHeader: this.props.title}}
        options={{draggable: true, balloonPanelMaxMapArea: 0}}
      />
   );
  }
}

Point.propTypes = {
  title: PropTypes.string,
  coordinates: PropTypes.arrayOf(PropTypes.number),
  onDrag: PropTypes.func
};

export default Point;
