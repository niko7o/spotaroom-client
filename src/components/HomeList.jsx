/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Homelist = props => (
  <div className="Homelist">
    {props.homes.map(home => (
      <div className="Homecard" key={home.id}>
        <div className="Homecard__photo">
          <img src={home.photoUrls.homecardHidpi} alt={home.title} />
        </div>

        <div className="Homecard__info">
          <span className="Homecard__title">{home.title}</span>
          <div className="Homecard__price">{`${home.pricePerMonth}€`}</div>
          <div className="Homecard__buttons">
            <Button text="More details" hasClass="primaryBtn" />
            <Button text="Book now" hasClass="primaryBtn" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

Homelist.defaultProps = {
  homes: [],
};

Homelist.propTypes = {
  homes: PropTypes.arrayOf(PropTypes.object),
};

export default Homelist;
