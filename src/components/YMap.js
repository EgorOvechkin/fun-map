import React, { Component } from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const YMap = () => (
  <YMaps>
    <div>
      <Map defaultState={{ center: [54.321119, 48.399449], zoom: 15 }} />
    </div>
  </YMaps>
);

export default YMap;
