import React from 'react';
import { GeoObject } from 'react-yandex-maps';

function LineString(props) {
  return (
    <GeoObject
      geometry={{type: 'LineString', coordinates: props.coordinates}}
      options={{strokeWidth: 5}}
    />
  );
}

export default LineString;