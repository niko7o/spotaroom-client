import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    hasClass,
    text,
  } = props;

  return (
    <button type="button" className={hasClass}>{text}</button>
  );
};

Button.defaultProps = {
  hasClass: 'primaryBtn',
};

Button.propTypes = {
  hasClass: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
