import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { BaseButton } from '@components/common';

const DaumPostModal = ({ onClose, onClick }) => {
  const handleComplete = (data) => {
    if (onClick) onClick(data);
    if (onClose) onClose();
  };
  return (
    <div className="basicPop zipCodePop" style={{ display: 'block' }}>
      {/* <div style={{ height: 50 }}> */}
      <BaseButton label={'닫기'} className={'btnPClose'} onClick={() => onClose()} />
      {/* </div> */}
      <h1 className="pt">주소검색</h1>
      <div className="pBack">
        <DaumPostcode onComplete={handleComplete} />
      </div>
    </div>
  );
};

export default DaumPostModal;
