import React from 'react';

const ModifyAlert = ({ onClose, onContinue, height = 200 }) => {
  return (
    <div className="alertPop modifyPop" style={{ display: 'block', height: height }}>
      <h1 className="pt">수정 내용이 저장되었습니다.</h1>
      <div className="pBack">계속해서 수정하시겠습니까?</div>
      <div className="pBtn">
        <span className="fr">
          <button className="btnL sm" onClick={() => onClose()}>
            목록으로
          </button>
          <button className="btnB sm" onClick={() => onContinue()}>
            네, 계속 수정하겠습니다.
          </button>
        </span>
      </div>
    </div>
  );
};

export default ModifyAlert;
