import React from 'react';
import LineString from '../../components/Map/LineString';
import {shallow} from 'enzyme';

it('renders LineString', () => {
  const wrapper = shallow(<LineString />);
  expect(wrapper).toMatchSnapshot();
});
