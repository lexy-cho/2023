import React from 'react';
import AccountModal from './components/AccountModal';
import useAccountModal, { useAccountAddApi } from './hooks/useAccountModal';
import { ModalFormButton } from '@components/common';
const AccountAddModal = ({ onClose, onRefresh }) => {
  const { view } = useAccountModal();
  const { api } = useAccountAddApi({ view, onClose, onRefresh });
  //console.log('AccountAd==>', view);

  return (
    <div className="fullPop accountPop" id="accountPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">계정 추가</h1>
      <AccountModal view={view} />
      <ModalFormButton
        isSubmit={api?.isSubmit}
        onCancel={() => {
          onClose();
        }}
        onSave={() => api?.handleSave()}
      />
      {/* <div className="pBtn">
        <span className="fr">
          <button className="btnL sm">취소</button>
          <button className="btnB sm">신규 추가</button> */}
      {/* <button className="btnB sm">저장 후 닫기</button> */}
      {/* </span>
      </div> */}
    </div>
  );
};

export default AccountAddModal;
