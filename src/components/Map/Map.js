import React, { Component } from 'react';
import Point from './Point';
import LineString from './LineString';
import { YMaps, Map } from 'react-yandex-maps';

class YMap extends Component {
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
          defaultState={{ center: [54.321119, 48.399449], zoom: 15 }}
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

export default YMap;
