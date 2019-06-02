import React from 'react';
import PointList from '../../components/RouteEditor/PointList';
import {shallow} from 'enzyme';

const generateTitles = n => Array.from({length: n}, (item, index) => `Point ${++index}`);

it('renders point list', () => {
  const titles = generateTitles(5);
  const wrapper = shallow(<PointList titles={titles} />);
  expect(wrapper).toMatchSnapshot();
});

describe('shouldComponentUpdate', () => {
  describe('when new titles is same', () => {
    it('should be false', () => {
      const oldTitles = generateTitles(3);
      const newTitles = generateTitles(3);
      const wrapper = shallow(<PointList titles={oldTitles} />);

      const shouldUpdate = wrapper.instance().shouldComponentUpdate({titles: newTitles});
      expect(shouldUpdate).toBeFalsy();
    });
  });

  describe('when new titles is different', () => {
    it('should be true', () => {
      const oldTitles = generateTitles(3);
      const newTitles = generateTitles(3).reverse();
      const wrapper = shallow(<PointList titles={oldTitles} />);

      const shouldUpdate = wrapper.instance().shouldComponentUpdate({titles: newTitles});
      expect(shouldUpdate).toBeTruthy();
    });
  });
});
