import React, { Component } from 'react';

class HomeList extends Component {
  constructor(props) {
    super(props);

    const {
      homes,
    } = this.props;

    this.state = {
      page: 1,
      homes,
    };
  }

  render() {
    const {
      page,
      homes,
    } = this.state;

    return (
      <div className="HomeList">
        <h2>home list</h2>
        <p>
          Page:
          { page }
        </p>

        {/* homes &&
        {
          homes.map(home => <div className="Home">{home.title}</div>)
        } */}
      </div>
    );
  }
}

export default HomeList;
