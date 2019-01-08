import React, { Component } from 'react';
import Map from './components/Map';
import Input from './components/Input';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.setMapRef = this.setMapRef.bind(this);
    this.setPointCoordinates = this.setPointCoordinates.bind(this);
    this.state = {
      points: []
    };
  }

  render() {
    const coordinates =this.state.points.map(point => point.coordinates);
    const titles =this.state.points.map(point => point.title);

    return (
      <div className="App">
        <Input onEnter={title => this.addPoint(title)} />
        <Map pointCoordinates={coordinates} onPointDrag={this.setPointCoordinates} setMapRef={this.setMapRef}/>
      </div>
    );
  }

  setMapRef(mapRef) {
    this.map = mapRef;
  }
  //TODO event или coordinates ?
  setPointCoordinates(index, coordinates) {
    const points = this.state.points.slice();
    points[index].coordinates = coordinates;

    this.setState({points});
    console.log(this.state)
  }

  addPoint(title) {
    const point = {title, coordinates: this.map.getCenter()};

    this.setState({points: this.state.points.concat([point])})
    console.log(title)
  }
}

export default App;
