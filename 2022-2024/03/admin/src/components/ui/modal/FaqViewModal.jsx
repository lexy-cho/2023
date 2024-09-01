import React from 'react';
import { useFaqAdd, useFaqAddApi } from './hooks/useModalFaqAdd';
import DragDropImage from '../../common/DragDropImage';
import FaqModal from './components/FaqModal';
import { ModalFormButton } from '@components/common';
import useModal from '@components/ui/modal/hooks/useModal';

const FaqView = ({ onClose, onSearch, onFetchData, detail = {}, getDetail }) => {
  const { faqCategory, handleChange, startDateRef, endDateRef, dpMax, dpMin, fileList, setFileList, handleAddFile, handleFileDelete, params, setParams, langs, setLangs } = useFaqAdd({ detail });
  const { handleEdit, isSubmit, handleLangCheck } = useFaqAddApi({ onSearch, onClose, fileList, onFetchData, langs, setLangs, params, setParams, getDetail });
  const { handleOpenModal, handleCloseModal, Modal } = useModal();

  return (
    <>
      <div className="fullPop faqAddPop" id="faqAddPop" style={{ display: 'block' }}>
        <button className="btnPClose" onClick={() => onClose()}>
          닫기
        </button>
        <h1 className="pt">FAQ 수정</h1>
        <div className="pBack scroll">
          <FaqModal
            viewMode={'view'}
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
            handleLangCheck={handleLangCheck}
            langs={langs}
            setLangs={setLangs}
            handleCloseModal={handleCloseModal}
            Modal={Modal}
            handleEdit={handleEdit}
          />
        </div>
        <ModalFormButton isSubmit={isSubmit} onCancel={() => onClose()} onSave={() => handleOpenModal()} />
      </div>
    </>
  );
};

export default FaqView;
