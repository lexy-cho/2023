import React, { forwardRef } from 'react';
import DatePicker from './DatePicker';

const InputDate = forwardRef(({ dpMin, dpMax, ...props }, ref) => {
  let style = { backgroundColor: '#ffffff' };
  if (props.readOnly || props.disabled) {
    style = {};
  }
  return <input ref={ref} style={{ ...style }} {...props} readOnly onClick={() => {}} />;
});

export default InputDate;
