import React from 'react';
import useExposureDatePicker from './hooks/useExposureDatePicker';
import { Editor, BaseInput, InputDate, ModalFormButton } from '@components/common';
import useEvent, { useEventAddApi } from './hooks/useEventModal';
import EventModal from './components/EventModal';

const EventAdd = ({ onFetchData, onClose }) => {
  const useExposureProps = useExposureDatePicker({ id: '#eventAddPop' });
  const { params, handleChange, fileList, setFileList } = useEvent({ ...useExposureProps });
  const { handleAdd, isSubmit } = useEventAddApi({ onClose, onFetchData });

  return (
    <div className="fullPop eventAddPop" id="eventAddPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">이벤트 팝업</h1>
      <div className="pBack">
        <div className="scroll">
          <EventModal useExposureProps={useExposureProps} params={params} handleChange={handleChange} fileList={fileList} setFileList={setFileList} />
        </div>
      </div>
      <ModalFormButton isSubmit={isSubmit} onCancel={() => onClose()} onSave={() => handleAdd({ params, fileList })} />
      {/* <div className="pBtn">
        <span className="fr">
          <button className="btnL sm" onClick={() => onClose()}>
            취소
          </button>
          <button className="btnB sm" onClick={() => handleAdd({ params, fileList })}>
            신규 추가
          </button>
        </span>
      </div> */}
    </div>
  );
};

export default EventAdd;
