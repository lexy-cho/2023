import React from 'react';

const SrtAlert = ({ onClose, title = '룸 타입을 해제해주세요.', msg = '타입 삭제를 위해서는 해당 타입의 룸 타입 해제가 필요합니다. 해제 후 다시 시도해주세요.', height = 180 }) => {
  console.log(onClose);
  return (
    <div className="alertPop srtAlertPop" style={{ display: 'block', height: height }}>
      <h1 className="pt">{title}</h1>
      <div className="pBack">{msg}</div>
      <div className="pBtn">
        <button className="btnL sm" onClick={() => onClose()}>
          확인
        </button>
      </div>
    </div>
  );
};

export default SrtAlert;
