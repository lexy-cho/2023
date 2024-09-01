import React from 'react';
import { BaseInput } from '@components/common';
const InputArea = ({ title, requied, dlClass, em, add, span = false, ...props }) => {
  return (
    <dl className={dlClass}>
      <dt>
        {title} {requied && <sup>*</sup>}
      </dt>
      <dd>
        {span ? (
          <span className="unit">
            <BaseInput {...props} />
          </span>
        ) : (
          <BaseInput {...props} />
        )}
        {/* <BaseInput {...props} /> */}
        {em && <em>{em}</em>}
      </dd>
      {add && add}
    </dl>
  );
};

InputArea.defaultProps = {
  requied: false,
};

export default InputArea;
