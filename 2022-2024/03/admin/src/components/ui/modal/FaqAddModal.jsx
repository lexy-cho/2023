import React from 'react';
import { dateFormatUse } from '@utils/DateUtil';
import { useFaqAdd, useFaqAddApi } from './hooks/useModalFaqAdd';
import DragDropImage from '../../common/DragDropImage';
import FaqModal from './components/FaqModal';
import { ModalFormButton } from '@components/common';

const FaqAdd = ({ onClose, onSearch, onFetchData }) => {
  const { faqCategory, params, setParams, handleChange, startDateRef, endDateRef, dpMax, dpMin, fileList, setFileList, handleAddFile, handleFileDelete } = useFaqAdd({ onFetchData });
  const { handleAdd, isSubmit } = useFaqAddApi({ onSearch, onClose, fileList, onFetchData, setParams });

  return (
    <div className="fullPop faqAddPop" id="faqAddPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">FAQ 추가</h1>
      <div className="pBack scroll">
        <FaqModal
          viewMode={'write'}
          params={params}
          faqCategory={faqCategory}
          handleChange={handleChange}
          startDateRef={startDateRef}
          endDateRef={endDateRef}
          dpMax={dpMax}
          dpMin={dpMin}
          fileList={fileList}
          setFileList={setFileList}
          handleAddFile={handleAddFile}
          handleFileDelete={handleFileDelete}
          onFetchData={onFetchData}
        />
      </div>
      <ModalFormButton isSubmit={isSubmit} onCancel={() => onClose()} onSave={() => handleAdd({ params, fileList })} />
    </div>
  );
};

export default FaqAdd;
