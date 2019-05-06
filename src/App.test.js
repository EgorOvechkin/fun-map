import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

function getAppWithPoints(length) {
  const points = [];

  for (let i = 1; i <= length; i++) {
    points.push({title: `point_${i}`, coordinates: [10 * i + i, 10 * i + i]});
  }

  const wrapper = shallow(<App />);
  wrapper.setState({points});

  return wrapper;
}

function getTitles(points) {
  return points.map(point => point.title).join(',');
}

function getCoordinates(points) {
  return points.map(point => point.coordinates);
}

describe('#move point', () => {
  const wrapper = getAppWithPoints(3);
  let points = wrapper.state('points');
  let titles = getTitles(points);
  let coordinates = getCoordinates(points);

  expect(points.length).toBe(3);
  expect(titles).toBe('point_1,point_2,point_3');
  expect(coordinates).toMatchObject([[11,11], [22,22], [33,33]]);

  wrapper.instance().movePoint({oldIndex: 0, newIndex: 1});

  points = wrapper.state('points');
  titles = getTitles(points);
  coordinates = getCoordinates(points);
  expect(points.length).toBe(3);
  expect(titles).toBe('point_2,point_1,point_3');
  expect(coordinates).toMatchObject([[22,22], [11,11], [33,33]]);
});
