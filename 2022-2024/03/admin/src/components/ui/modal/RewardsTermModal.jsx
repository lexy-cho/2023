import React, { useState } from 'react';
import { InputArea, ModalFormButton, BaseInput } from '@components/common';
import useRewardsPeriod, { useRewardsPeriodApi } from '../../../pages/rewards/rewards/manager/hooks/useRewardsPeriod';

const RewardsTerm = ({ onClose, ...api }) => {
  const { rePeriod } = useRewardsPeriod();
  useRewardsPeriodApi(rePeriod);

  console.log(rePeriod?.detail);

  return (
    <div className="basicPop rewardsTermPop" id="rewardsTermPop" style={{ display: 'block' }}>
      <button className="btnPClose" id="roomChoicePopClose1" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">리워즈 유지기간</h1>
      <div className="pBack">
        <article className="boxDt">
          <div className="grid">
            <dl>
              <dt>유지기간</dt>
              <dd>
                <span className="unit">
                  <BaseInput
                    type="text"
                    value={rePeriod?.detail}
                    placeholder="00"
                    inputType={'num'}
                    maxLength={3}
                    onChange={(e) => {
                      rePeriod?.setDetail(e.target.value);
                    }}
                  />
                  <em>일</em>
                </span>
              </dd>
            </dl>
          </div>
        </article>
        <div className="TxtInfo">
          <p>
            1. 등급 하향 규칙
            <br />· 등급이 승급된 날짜를 기준으로 위에 기재한 일자 이후에는 등급이 하향됨
          </p>
          <p>
            2. 등급 상향 규칙
            <br />· 기재한 일자 이내에 승급조건을 달성하면, 즉시 등급이 상향됨
          </p>
          <p>
            3. 등급 유지 규칙
            <br />· 동일한 승급 조건을 기재한 일자 이내에 달성하면, 이전 승급 날짜 이후에 동일한 등급이 유지됨
          </p>
        </div>
      </div>
      <ModalFormButton
        onCancel={() => {
          onClose();
        }}
        onSave={() => api?.handlePeriodSave(rePeriod?.detail)}
      />
      {/* <div className="pBtn">
        <span className="fr">
          <button className="btnL sm">닫기</button>
          <button className="btnB sm">저장 후 닫기</button>
        </span>
      </div> */}
    </div>
  );
};

export default RewardsTerm;
