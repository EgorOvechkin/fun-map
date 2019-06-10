import React from 'react';
import Map from '../../components/Map/Map';
import Point from '../../components/Map/Point';
import {shallow} from 'enzyme';
import {generatePoints} from 'helpers';

it('renders Map', () => {
  const pointLength = 5;
  const wrapper = shallow(<Map points={generatePoints(pointLength)}/>);

  expect(wrapper.find('Point').length).toBe(pointLength);

  expect(wrapper).toMatchSnapshot();
});
