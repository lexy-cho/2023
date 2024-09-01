import React from 'react';
import { BaseButton } from '@components/common';

const CommonAlert = ({ onClose, onCancel, onConfirm, height = 180, title = '제목', msg = '내용', btnLabels = { cancel: '닫기', confirm: '저장' }, data }) => {
  return (
    <div className="alertPop modifyPop" style={{ display: 'block', height: height }}>
      <h1 className="pt">{title}</h1>
      <div className="pBack">{msg}</div>
      <div className="pBtn">
        <span className="fr">
          <BaseButton className={'btnL sm'} onButtonClick={() => (onCancel ? onCancel() : onClose())} buttonLabel={btnLabels?.cancel} />

          <BaseButton className={'btnB sm'} onButtonClick={() => onConfirm(data)} buttonLabel={btnLabels?.confirm} />
        </span>
      </div>
    </div>
  );
};

export default CommonAlert;
