/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Homelist extends Component {
  render() {
    return (
      <div className="Homelist">
        {this.props.homes.map(home => (
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

Homelist.defaultProps = {
  homes: [],
};

Homelist.propTypes = {
  homes: PropTypes.arrayOf(PropTypes.object),
};

export default Homelist;
