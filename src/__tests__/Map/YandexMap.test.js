import React from 'react';
import YandexMap from '../../components/Map/YandexMap';
import Point from '../../components/Map/Point';
import {shallow} from 'enzyme';
import {generatePoints} from 'helpers';

it('renders YandexMap', () => {
  const pointLength = 5;
  const wrapper = shallow(<YandexMap points={generatePoints(pointLength)}/>);

  expect(wrapper.find('Point').length).toBe(pointLength);

  expect(wrapper).toMatchSnapshot();
});
