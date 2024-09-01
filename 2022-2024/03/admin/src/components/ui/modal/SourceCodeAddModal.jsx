import React from 'react';
import { InputArea, ModalFormButton } from '@components/common';
import { useSourceCodeModal } from './hooks/useSourceCodeModal';

const SourceCodeAdd = ({ onClose, onRefresh, data }) => {
  const { view } = useSourceCodeModal({ onClose, onRefresh, data });

  return (
    <div className="fullPop sourceCodePop" id="sourceCodePop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">소스 코드 추가</h1>
      <div className="pBack">
        <div className="scroll">
          {/*  */}
          <article className="lbox">
            <div className="boxTit">
              <h3>기본 정보</h3>
            </div>
            <div className="boxDt">
              <div className="grid">
                <InputArea requied title={'소스 이름'} type="text" value={view?.body?.title || ''} placeholder="소스 이름 입력" onChange={(e) => view?.handleItemChange('title', e.target.value)} />

                <InputArea
                  requied
                  title={'소스 코드'}
                  type="text"
                  value={view?.body?.source_code || ''}
                  placeholder="소스 코드 입력"
                  onChange={(e) => view?.handleItemChange('source_code', e.target.value)}
                />
              </div>
              <InputArea dlClass={'mt24'} title={'비고'} type="text" defaultValue={view?.body?.notes || ''} placeholder="비고 입력" onChange={(e) => view?.handleItemChange('notes', e.target.value)} />
            </div>
          </article>
          {/*  */}
        </div>
      </div>
      <ModalFormButton
        isSubmit={view?.isSubmit}
        onCancel={() => {
          onClose();
        }}
        saveTitle={data?.type === 'write' ? '신규 추가' : '저장 후 닫기'}
        onSave={() => view?.handleSave()}
      />

      {/* <div className="pBtn">
        <span className="fr">
          <button className="btnL sm">취소</button>
          <button className="btnB sm">신규 추가</button>
        </span>
      </div> */}
    </div>
  );
};

export default SourceCodeAdd;
