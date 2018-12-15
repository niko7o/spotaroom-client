import React from 'react';

const Button = (props) => {
  const {
    hasClass,
    text 
  } = props;

  return (
    <button type="button" className={hasClass}>{text}</button>
  );
};

export default Button;
