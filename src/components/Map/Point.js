import React from 'react';
import { Placemark } from 'react-yandex-maps';

function getCoordinates(event) {
  return event.get('target').geometry.getCoordinates();
}

function Point(props) {
  return (
    <Placemark
      geometry={props.coordinates}
      onDrag={event => props.onDrag(getCoordinates(event))}
      modules={['geoObject.addon.balloon']}
      properties={{balloonContentHeader: props.title}}
      options={{draggable: true}}
    />
  );
}

export default Point;