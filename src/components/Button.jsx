import React from 'react';

const Button = (props) => {
  const {
    classes,
    text 
  } = props;

  return (
    <button type="button" className={classes}>{text}</button>
  );
};

export default Button;
