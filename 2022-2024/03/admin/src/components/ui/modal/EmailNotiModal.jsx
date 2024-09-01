import React from 'react';
import { BaseSelect, BaseInput, BaseTextArea, InputDate, ModalFormButton } from '@components/common';
import useEmailNotiModal, { useEmailNotiModalApi } from './hooks/useEmailNotiModal';

const EmailNoti = ({ onClose }) => {
  const emailNotiprops = useEmailNotiModal();
  const { api } = useEmailNotiModalApi({ ...emailNotiprops, onClose });

  return (
    <div className="basicPop emailNotidPop" id="emailNotidPop" style={{ display: 'block' }}>
      <h1 className="pt">이메일 알림 설정</h1>
      <div className="pBack">
        <article className="boxDt">
          <dl className="mt12">
            <dt>이메일</dt>
            <dd>
              <BaseInput type="text" placeholder="dowhat@dowhat.io" value={emailNotiprops.email} onChange={(e) => emailNotiprops.setEmail(e.target.value)} maxLength={50} />
            </dd>
          </dl>
        </article>
        <p className="noti small">위 기입하신 이메일로 VOC 알림을 전송해드립니다.</p>
      </div>
      <ModalFormButton isSubmit={api.isSubmit} onCancel={() => onClose()} onSave={() => api.handleSave()} />
    </div>
  );
};

export default EmailNoti;
