import React from 'react';
import { BaseButton } from '@components/common';

const PasswordReset = ({ onClose, height = 180, id, ...api }) => {
  console.log(id);
  return (
    <div className="alertPop modifyPop" style={{ display: 'block', height: height }}>
      <h1 className="pt">비밀번호 초기화 하시겠습니까?</h1>
      <div className="pBack">초기화 시 초기 비밀번호는 1234 입니다.</div>
      <div className="pBtn">
        <span className="fr">
          <BaseButton className={'btnL sm'} onButtonClick={onClose} buttonLabel={'닫기'} />
          {/* <button className="btnL sm" onClick={() => onClose()}>
            닫기
          </button> */}

          <BaseButton
            className={'btnB sm'}
            onButtonClick={() => {
              api?.handleResetPassword(id), onClose();
            }}
            buttonLabel={'초기화'}
          />
          {/* <button
            className="btnB sm"
            onClick={() => {
              api?.handleResetPassword(id), onClose();
            }}
          >
            초기화
          </button> */}
        </span>
      </div>
    </div>
  );
};

export default PasswordReset;
