import React, { Component } from 'react';

class Frame extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.children;
  }
}

export default Frame;