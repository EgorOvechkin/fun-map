import React from 'react';
import PropTypes from 'prop-types';
import { GeoObject } from 'react-yandex-maps';

function LineString(props) {
  return (
    <GeoObject
      geometry={{type: 'LineString', coordinates: props.coordinates}}
      options={{strokeWidth: 5}}
    />
  );
}

LineString.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
};

export default LineString;
