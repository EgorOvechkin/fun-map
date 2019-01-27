import React, { Component } from 'react';
import Map from './components/Map';
import RouteEditor from './components/RouteEditor';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.setMapRef = this.setMapRef.bind(this);
    this.setPointCoordinates = this.setPointCoordinates.bind(this);
    this.movePoint = this.movePoint.bind(this);
    this.state = {
      points: []
    };
  }

  render() {
    const coordinates = this.state.points.map(point => point.coordinates);
    const titles =this.state.points.map(point => point.title);

    return (
      <div className="app-container">
        <RouteEditor movePoint={this.movePoint} titles={titles} onEnter={title => this.addPoint(title)} />
        <Map points={this.state.points} onPointDrag={this.setPointCoordinates} setMapRef={this.setMapRef}/>
      </div>
    );
  }

  //TODO не привязываться к библиотеке
  movePoint({oldIndex, newIndex}) {
    const array = this.state.points.slice();
    array.splice(newIndex < 0 ? array.length + newIndex : newIndex, 0, array.splice(oldIndex, 1)[0]);

    // return array;
    this.setState({points: array})
  }

  setMapRef(mapRef) {
    this.map = mapRef;
  }
  //TODO event или coordinates ?
  setPointCoordinates(index, coordinates) {
    const points = this.state.points.slice();
    points[index].coordinates = coordinates;

    this.setState({points});
    // console.log(this.state)
  }

  addPoint(title) {
    const point = {title, coordinates: this.map.getCenter()};

    this.setState({points: this.state.points.concat([point])})
    console.log(title)
  }
}

export default App;
