import React from 'react';
import PointTitle from '../../components/RouteEditor/PointTitle';
import {shallow} from 'enzyme';

it('renders point title', () => {
  const wrapper = shallow(<PointTitle index={1} title={'Point'} />);
  expect(wrapper).toMatchSnapshot();
});

