import React from 'react';
import usePolicyModal, { usePolicyModalApi } from './hooks/usePolicyModal';
import { LangRadioGroup, FormButton, BaseTextArea, BaseInput, InputDate, SearchCheck, BaseCheckBox, RadioGroup, DragDropImage, InputArea, InputTextArea, ModalFormButton } from '@components/common';
import codeJson from '@data/code.json';

const PolicyMgt = ({ onClose }) => {
  const { view } = usePolicyModal();
  const { api } = usePolicyModalApi({ view, onClose });

  return (
    <div className="fullPop policyMgtPop" id="policyMgtPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">정책 설정</h1>
      <div className="pBack">
        <div className="scroll">
          {/*  */}
          <article className="lbox">
            <div className="boxTit">
              <h3>사용 정책</h3>
            </div>
            <div className="boxDt">
              <dl>
                <dt>
                  예약 가능 기간
                  <span className="miniNoti">
                    <em>?</em>
                    <p>
                      부킹엔진에서 사용자에게 노출되는 예약 가능한 날짜를 조정할 수 있습니다. <br />
                      ​예 &#41; 당일자가 1월 11일이고 입력된 숫자가 60일 경우,
                      <br />
                      1월 11일부터 60일 뒤인 3월 11일까지 예약 날짜가 오픈 되도록 구성​
                    </p>
                  </span>
                </dt>
                <RadioGroup type={'resv_period'} radios={codeJson.basicType} checkValue={`${view?.item?.is_resv_period}`} onCheck={(e) => view?.handleItemChange('is_resv_period', e)} />

                <dd>
                  <span className="unit">
                    <BaseInput
                      type="number"
                      maxLength={2}
                      defaultValue={view?.item?.resv_period_day}
                      onChange={(e) => view?.handleItemChange('resv_period_day', e.target.value)}
                      disabled={view?.item?.is_resv_period === 0}
                    />
                    {/* <input type="text" /> */}
                    <em>일</em>
                  </span>
                </dd>
              </dl>
              <dl className="mt24">
                <dt>
                  결제방식
                  <span className="miniNoti">
                    <em>?</em>
                    <p>부킹엔진에서 사용자가 결제하는 방식을 설정할 수 있습니다.​</p>
                  </span>
                </dt>
                <RadioGroup type={'payment_method'} radios={codeJson.payType} checkValue={view?.item?.payment_method} onCheck={(e) => view?.handleItemChange('payment_method', e)} />
              </dl>
              <dl className="mt24">
                <dt>
                  마일리지 적립
                  <span className="miniNoti">
                    <em>?</em>
                    <p>
                      부킹엔진에서 사용자가 예약을 진행할 때,
                      <br />
                      ​쿠폰이나 프로모션 코드의 사용 여부에 따른 마일리지 적립 여부를​ 설정할 수 있습니다.
                    </p>
                  </span>
                </dt>
                <RadioGroup type={'is_mileage_save'} radios={codeJson.mileType} checkValue={`${view?.item?.is_mileage_save}`} onCheck={(e) => view?.handleItemChange('is_mileage_save', e)} />
              </dl>

              <RadioGroup
                title={'통화코드'}
                dlClass={'mt24'}
                type={'currency_code'}
                radios={codeJson.exchangeType}
                checkValue={`${view?.item?.currency_code}`}
                onCheck={(e) => view?.handleItemChange('currency_code', e)}
              />
            </div>
          </article>
        </div>
      </div>
      <ModalFormButton isSubmit={api.isSubmit} onCancel={() => onClose()} onSave={() => api.handleSave()} />
    </div>
  );
};

export default PolicyMgt;
