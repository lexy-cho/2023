import React from 'react';
import PropTypes from 'prop-types';
import { validateNumberInput } from '@utils/StringUtil';
const BaseInput = ({ inputType = 'string', ...props }) => {
  return (
    <input
      {...props}
      onInput={(e) => {
        if (e.target.maxLength > 0 && e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength);
        if (inputType === 'num') e.target.value = validateNumberInput(e.target.value);
      }}
    />
  );
};

export default BaseInput;
