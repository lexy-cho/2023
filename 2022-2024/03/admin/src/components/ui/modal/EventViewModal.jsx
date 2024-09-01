import React from 'react';
import { Editor, BaseInput, InputDate, ModalFormButton } from '@components/common';
import ExposureDatePicker from '@components/ui/modal/components/ExposureDatePicker';
import useExposureDatePicker from './hooks/useExposureDatePicker';

import sampleImage from '@assets/images/sample1.png';
import useEvent, { useEventModifyApi } from './hooks/useEventModal';
import EventModal from './components/EventModal';

const EventView = ({ detail, onFetchData, onClose }) => {
  const useExposureProps = useExposureDatePicker({ id: '#eventViewPop', startDt: detail.exposure_start_date, endDt: detail.exposure_end_date });
  const { params, handleChange, fileList, setFileList } = useEvent({ ...useExposureProps, detail });
  const { handleModify, isSubmit } = useEventModifyApi({ onClose, onFetchData });

  return (
    <div className="fullPop eventViewPop" id="eventViewPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">이벤트 팝업 상세</h1>
      <div className="pBack">
        <div className="scroll">
          <EventModal useExposureProps={useExposureProps} params={params} fileList={fileList} setFileList={setFileList} handleChange={handleChange} />
        </div>
      </div>
      <ModalFormButton isSubmit={isSubmit} onCancel={() => onClose()} onSave={() => handleModify({ params, fileList })} />
      {/* <div className="pBtn">
        <span className="fr">
          <button className="btnL sm" onClick={() => onClose()}>
            취소
          </button>
          <button className="btnB sm" onClick={() => handleModify({ params, fileList })}>
            저장 후 닫기
          </button>
        </span>
      </div> */}
    </div>
  );
};

export default EventView;
