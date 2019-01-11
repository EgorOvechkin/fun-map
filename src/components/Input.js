import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointTitle: ''
    };
  }

  render() {
    return (
      <div>
        < input type="text" onChange={event => this.handleChange(event)} onKeyDown={event => this.keyPress(event)} />
        < SortableList items={this.props.titles} onSortEnd={this.props.movePoint} />
      </div>
    )
  }

  handleChange(event) {
    this.setState({pointTitle: event.target.value.trim()})
  }

  keyPress(event) {
    if (event.key !== 'Enter') {
      return;
    }
    // console.log(this.state.pointTitle.trim())
    this.props.onEnter(this.state.pointTitle);
    this.setState({pointTitle: ''});
    event.target.value = '';
  }
}

export default Input;
