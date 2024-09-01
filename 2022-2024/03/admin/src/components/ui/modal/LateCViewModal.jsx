import React, { useEffect } from 'react';
import { RadioGroup, InputArea, BaseInput, BasicCalendar, SeasonCalendar } from '@components/common';
import useLateCViewModal from './hooks/useLateCViewModal';

const LateCViewModal = ({ onClose, onFetch, id }) => {
  const { params, handleChange, handleModify } = useLateCViewModal({ onClose, onFetch, id });
  console.log({ onClose, onFetch, id });
  useEffect(() => {
    console.log(params);
  }, [params]);
  return (
    <div className="fullPop lateCPop" id="lateCPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">레이트 카테고리 상세</h1>
      <div className="pBack">
        <div className="scroll">
          {/*  */}
          <article className="lbox">
            <div className="boxTit">
              <h3>기본 정보</h3>
            </div>
            <div className="boxDt">
              <div className="grid case3_2">
                <InputArea title={'카테고리 이름'} requied type="text" placeholder="아이템 이름 입력" value={params?.title || ''} onChange={(e) => handleChange('title', e.target.value)} />

                <BasicCalendar title={'시작 날짜'} requied handleItemChange={(name, date) => handleChange(name, date)} name={'start_date'} value={params?.start_date} />
                <BasicCalendar title={'종료 날짜'} requied handleItemChange={(name, date) => handleChange(name, date)} name={'end_date'} value={params?.end_date} />
              </div>
              <dl className="mt24">
                <dt>비고</dt>
                <dd>
                  <BaseInput type="text" placeholder="비고 입력" value={params.notes} onChange={(e) => handleChange('notes', e.target.value)} />
                </dd>
              </dl>
            </div>
          </article>
          {/*  */}
          <article className="lbox">
            <div className="boxTit">
              <h3>연결된 레이트 코드</h3>
            </div>
            <div className="boxDt">
              <dl className="dtOnlyTxt">
                <dd></dd>
              </dl>
            </div>
          </article>
          {/*  */}
        </div>
      </div>
      <div className="pBtn">
        <span className="fr">
          <button className="btnL sm" onClick={onClose}>
            취소
          </button>
          <button className="btnB sm" onClick={handleModify}>
            저장 후 닫기
          </button>
        </span>
      </div>
    </div>
  );
};

export default LateCViewModal;
