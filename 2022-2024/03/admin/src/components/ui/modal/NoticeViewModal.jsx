import React from 'react';
import useNotice, { useNoticeModifyApi } from './hooks/useNoticeModal';
import { Editor, BaseInput, InputDate } from '@components/common';
import useExposureDatePicker from './hooks/useExposureDatePicker';
import NoticeModal from './components/NoticeModal';
import LangRadioGroup from '@components/common/LangRadioGroup';
import useModal from '@components/ui/modal/hooks/useModal';

const NoticeView = ({ detail, getDetail, onFetchData, onClose }) => {
const useExposureProps = useExposureDatePicker({ id: '#noticeViewPop', startDt: detail.exposure_start_date, endDt: detail.exposure_end_date });
  const { handleEditor, quillRef, params, setParams, handleChange, langs, setLangs } = useNotice({ ...useExposureProps, detail });
  const { handleModify, handleLangCheck } = useNoticeModifyApi({ onClose, onFetchData, langs, setLangs, params, setParams, getDetail });
  const { handleOpenModal, handleCloseModal, Modal } = useModal();

  return (
    <div className="fullPop noticeViewPop" id="noticeViewPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>

      <h1 className="pt">공지사항 상세</h1>
      <div className="pBack scroll">
        <LangRadioGroup langs={langs} onLangCheck={handleLangCheck} />
        {/* <div className="langSelect">
          <span>
            <input type="radio" defaultChecked />
            <label>한국어</label>
          </span>
          <span>
            <input type="radio" />
            <label>영어</label>
          </span>
          <span>
            <input type="radio" />
            <label>일본어</label>
          </span>
          <span>
            <input type="radio" />
            <label>중국어 간체</label>
          </span>
          <span>
            <input type="radio" />
            <label>중국어 번체</label>
          </span>
          <span>
            <input type="radio" />
            <label>포르투칼어</label>
          </span>
          <span>
            <input type="radio" />
            <label>스페인어</label>
          </span>
        </div> */}
        <NoticeModal
          useExposureProps={useExposureProps}
          handleEditor={handleEditor}
          quillRef={quillRef}
          params={params}
          handleChange={handleChange}
          handleCloseModal={handleCloseModal}
          Modal={Modal}
          handleModify={handleModify}
        />
      </div>
      <div className="pBtn">
        <span className="fr">
          <button className="btnL sm" onClick={() => onClose()}>
            취소
          </button>
          <button className="btnB sm" onClick={() => handleOpenModal()}>
            저장 후 닫기
          </button>
        </span>
      </div>
    </div>
  );
};

export default NoticeView;
