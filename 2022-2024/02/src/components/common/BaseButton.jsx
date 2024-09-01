import React from 'react';
import PropTypes from 'prop-types';

const BaseButton = ({ label, onClick, type, className, disabled, ...props }) => {
  return (
    <button type={type} className={`${className}`} onClick={onClick} disabled={disabled} {...props}>
      {label}
    </button>
  );
};

BaseButton.displayName = 'BaseButton';

BaseButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

BaseButton.defaultProps = {
  onClick: () => {},
  type: 'button',
  className: '',
  disabled: false,
};

export default BaseButton;
