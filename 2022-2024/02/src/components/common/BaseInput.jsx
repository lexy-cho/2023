import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const BaseInput = ({ label, type, value, onChange, placeholder, error, isError, required, disabled, className, ...props }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`${className} ${error && value == '' ? 'base-input__input error' : ''}`}
        {...props}
      />
      {label && <label htmlFor={props?.id}>{label}</label>}
      {error && isError && <p className="errorP">{error}</p>}
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
  isError: PropTypes.bool,
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
  isError: true,
  required: false,
  disabled: false,
  className: '',
};

export default BaseInput;
