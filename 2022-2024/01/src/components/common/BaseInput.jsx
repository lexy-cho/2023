import React from 'react';
import PropTypes from 'prop-types';

const BaseInput = ({ label, type, value, onChange, placeholder, error, required, disabled, className, ...props }) => {
  return (
    <>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} className={`${error ? 'base-input__input--error' : ''}`} {...props} />
      {error && <p className="errorP">{error}</p>}
    </>
  );
};

BaseInput.displayName = 'BaseInput';

BaseInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

BaseInput.defaultProps = {
  label: '',
  value: '',
  onChange: () => {},
  placeholder: '',
  error: '',
  required: false,
  disabled: false,
  className: '',
};

export default BaseInput;
