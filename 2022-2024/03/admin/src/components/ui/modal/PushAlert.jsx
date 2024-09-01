import React from 'react';
import { getDate } from '@utils/DateUtil';
const PushAlert = ({ onClose, onSend, height = 200, title, user }) => {
  return (
    <div className="alertPop pushAlertPop" style={{ display: 'block', height: height }}>
      <h1 className="pt">푸시 메세지를 발송하시겠습니까?</h1>
      <div className="pBack">
        발송일({getDate()}) / 첨부타입 : {title} / 대상 : {user || 0}명
      </div>
      <div className="pBtn">
        <span className="fr">
          <button className="btnL sm" onClick={() => onClose()}>
            닫기
          </button>
          <button className="btnB sm" onClick={() => onSend()}>
            발송
          </button>
        </span>
      </div>
    </div>
  );
};

export default PushAlert;
