import React from 'react';
import useNotice, { useNoticeAddApi } from './hooks/useNoticeModal';
import { Editor, BaseInput, InputDate, ModalFormButton } from '@components/common';
import useExposureDatePicker from './hooks/useExposureDatePicker';
import NoticeModal from './components/NoticeModal';

const NoticeAdd = ({ onFetchData, onClose }) => {
  const useExposureProps = useExposureDatePicker({ id: '#noticeAddPop' });
  const { handleEditor, quillRef, params, handleChange } = useNotice({ ...useExposureProps });
  const { handleAdd, isSubmit } = useNoticeAddApi({ onClose, onFetchData });

  return (
    <div className="fullPop noticeAddPop" id="noticeAddPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">공지사항 추가</h1>
      <div className="pBack scroll">
        <NoticeModal useExposureProps={useExposureProps} handleEditor={handleEditor} quillRef={quillRef} params={params} handleChange={handleChange} />
      </div>
      <ModalFormButton isSubmit={isSubmit} onCancel={() => onClose()} onSave={() => handleAdd({ params })} />

      {/* <div className="pBtn">
        <span className="fr">
          <button className="btnL sm" onClick={() => onClose()}>
            취소
          </button>
          <button className="btnB sm" onClick={() => handleAdd({ params })}>
            신규 추가
          </button>
        </span>
      </div> */}
    </div>
  );
};

export default NoticeAdd;
