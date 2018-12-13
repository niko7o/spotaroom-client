import React, { Component } from 'react';

class HomeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    };
  }

  render() {
    const { page } = this.state;  
    return (
      <div className="HomeList">
        <h2>home list</h2>
        <p>
          Page:
          { page }
        </p>
      </div>
    );
  }
}

export default HomeList;
