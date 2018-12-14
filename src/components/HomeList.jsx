import React, { Component } from 'react';

class Homelist extends Component {
  constructor(props) {
    super(props);
    const { 
      propHomes,
      propCity
    } = this.props;

    this.state = {
      homes: propHomes,
      city: propCity,
    };
  }

  render() {
    const { homes } = this.state;

    return (
      <div className="Homelist">
        {homes.map(home => (
          <div className="Homecard" key={home.id}>
            <div className="Homecard__photo">
              <img src={home.photoUrls.homecardHidpi} alt={home.title} />
            </div>
            <span className="Homecard__title">{home.title}</span>
            <div className="Homecard__price">{`${home.pricePerMonth}€`}</div>
            <div className="Homecard__divider">
              <button type="button">More details</button>
              <button type="button">Book now</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Homelist;
