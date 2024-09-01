import React from 'react';
import { ModalFormButton } from '@components/common';
import useAccountModal, { useAccountViewApi } from './hooks/useAccountModal';
import AccountModal from './components/AccountModal';

const AccountView = ({ id, onClose, onRefresh, comCallback }) => {
  console.log(id);
  const { view } = useAccountModal();
  const { api } = useAccountViewApi({ view, onClose, onRefresh, id });

  return (
    <div className="fullPop accountPop" id="accountPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">계정 수정</h1>
      <AccountModal view={view} mode={'view'} comCallback={comCallback} />
      <ModalFormButton
        isSubmit={api?.isSubmit}
        onCancel={() => {
          onClose();
        }}
        onSave={() => api?.handleSave()}
      />
    </div>
  );
};

export default AccountView;
