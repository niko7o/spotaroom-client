import React, { Component } from 'react';

class HomeList extends Component {
  constructor(props) {
    super(props);

    const {
      homes,
    } = this.props;

    this.state = {
      homes,
    };
  }

  render() {
    const {
      homes,
    } = this.state;

    return (
      <div className="Home__List">
        {
          homes.map(home => <div className="Home__Card" key={home.id}>{home.title}</div>)
        }
      </div>
    );
  }
}

export default HomeList;
