import React, { Component } from 'react';
import Point from './Point';
import LineString from './LineString';
import { YMaps, Map } from 'react-yandex-maps';

class YMap extends Component {
  render() {
    const points = this.props.pointCoordinates.map((coordinates, index) => (
      <Point
        key={`point-${index}`}
        coordinates={coordinates}
        onDrag={event => this.props.onPointDrag(index, event)}
      />
    ));

    return (
      <YMaps>
        <Map
          defaultState={{ center: [54.321119, 48.399449], zoom: 15 }}
          instanceRef={this.props.setMapRef}
        >
          {points}
          <LineString coordinates={this.props.pointCoordinates} />
        </Map>
      </YMaps>
    );
  }
}

export default YMap;
