import React, { useState } from 'react';
import { BaseButton } from '@components/common';

const OftenDTDoneAlert = ({ onClose, onDelete }) => {
  return (
    <>
      <div className="alertPop" style={{ display: 'block' }}>
        <div className="pBack pt0">자주쓰는 말을 삭제 하시겠습니까?</div>
        <div className="pBtn">
          <BaseButton label={'취소'} className={'btnL'} onClick={onClose} />
          <BaseButton label={'삭제하기'} className={'btnB'} onClick={onDelete} />
        </div>
      </div>
    </>
  );
};

export default OftenDTDoneAlert;
