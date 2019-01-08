import React from 'react';
import { GeoObject } from 'react-yandex-maps';

function getCoordinates(event) {
  return event.get('target').geometry.getCoordinates();
}

function Point(props) {
  return (
    <GeoObject
      geometry={{type: 'Point', coordinates: props.coordinates}}
      onDrag={event => props.onDrag(getCoordinates(event))}
      options={{draggable: true}}
    />
  );
}

export default Point;