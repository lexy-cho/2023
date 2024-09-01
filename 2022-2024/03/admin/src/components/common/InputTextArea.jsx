import React from 'react';
import { BaseTextArea } from '@components/common';
const InputTextArea = ({ title, requied, dlClass, ...props }) => {
  return (
    <dl className={dlClass}>
      <dt>
        {title} {requied && <sup>*</sup>}
      </dt>
      <dd>
        <BaseTextArea {...props} />
      </dd>
    </dl>
  );
};

InputTextArea.defaultProps = {
  requied: false,
};

export default InputTextArea;
