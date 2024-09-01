import { trimToMaxBytes, calculateByteSize, calculateLengthSize, trimToMaxLength } from '@utils/StringUtil';
import React, { useEffect, useState } from 'react';
const BaseTextArea = ({ onTextChange, maxByteSize, keyType, ...props }) => {
  const { value } = props;
  //const [contentByte, setContentByte] = useState(calculateByteSize(value));

  // const [v, setV] = useState();
  // useEffect(() => {
  //   if (value) {
  //     setV(value);
  //   }
  // }, [value]);`

  return (
    <div className="taSet">
      <textarea
        {...props}
        onChange={(e) => {
          const byte = calculateLengthSize(e.target.value);
          if (byte <= maxByteSize) {
            onTextChange(keyType, e.target.value);
            //        setContentByte(calculateByteSize(e.target.value));
          } else {
            onTextChange(keyType, trimToMaxLength(e.target.value, maxByteSize));
            //      setContentByte(calculateByteSize(trimToMaxBytes(e.target.value, maxByteSize)));
          }
        }}
      />

      <em>
        <i>{calculateLengthSize(value)}</i>/{maxByteSize}
      </em>
    </div>
  );
};

BaseTextArea.defaultProps = {
  maxByteSize: 120,
};

export default BaseTextArea;
