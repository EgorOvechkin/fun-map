import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Point from './Point';
import LineString from './LineString';
import { YMaps, Map } from 'react-yandex-maps';

const MAP_STATE = {
  center: [54.321119, 48.399449],
  zoom: 15
};

class YandexMap extends Component {
  render() {
    const coordinates = [];
    const points = [];

    this.props.points.forEach((point, index) => {
      coordinates.push(point.coordinates);

      points.push(
        <Point
          key={`point-${index}`}
          title={point.title}
          coordinates={point.coordinates}
          onDrag={event => this.props.onPointDrag(index, event)}
        />
      );
    });

    return (
      <YMaps>
        <Map
          defaultState={MAP_STATE}
          instanceRef={this.props.setMapRef}
          width={'100%'}
          height={'100%'}
        >
          {points}
          <LineString coordinates={coordinates} />
        </Map>
      </YMaps>
    );
  }
}

YandexMap.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number)
  })),
  onPointDrag: PropTypes.func,
  setMapRef: PropTypes.func
};

export default YandexMap;
