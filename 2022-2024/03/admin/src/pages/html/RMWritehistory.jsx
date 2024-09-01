import React from 'react';
import { DatePicker } from '@components/common';

const RMWritehistory = () => {
  const { dpMin, dpMax } = DatePicker();

  return (
    <div className="contentBack">
      <div className="content"></div>
    </div>
  );
};

export default RMWritehistory;
