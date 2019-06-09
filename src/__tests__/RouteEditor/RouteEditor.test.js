import React from 'react';
import RouteEditor from '../../components/RouteEditor/RouteEditor';
import {shallow} from 'enzyme';

it('renders RouteEditor', () => {
  const wrapper = shallow(<RouteEditor />);
  expect(wrapper).toMatchSnapshot();
});
