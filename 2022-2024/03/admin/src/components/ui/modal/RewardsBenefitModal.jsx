import React from 'react';
import { BaseTextArea } from '@components/common';
import useRewardsBenefitModal from './hooks/useRewardsBenefitModal';

const RewardsBenefitModal = ({ onClose, params }) => {
  const { benefits, handleChange, handleAdd } = useRewardsBenefitModal({ params });

  return (
    <div className="basicPop rewardsBenefitPop" id="rewardsBenefitPop" style={{ display: 'block' }}>
      <button className="btnPClose" id="roomChoicePopClose1" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">기본혜택</h1>
      <div className="pBack">
        <div className="TxtInfo">
          <p>브랜딩 홈페이지의 리워즈 메인페이지에 보여지는​ 문구를 작성 및 수정할 수 있습니다.​</p>
        </div>
        <div className="boxDt">
          <div className="grid">
            <dl className="mt24">
              <dt>혜택내용 </dt>
              <dd>
                <div className="taSet">
                  <BaseTextArea value={benefits?.contents_base_benefits} placeholder="내용을 입력해주세요" maxByteSize={500} onTextChange={(k, v) => handleChange('contents_base_benefits', v)} />
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="pBtn">
        <span className="fr">
          <button className="btnL sm" onClick={() => onClose()}>
            닫기
          </button>
          <button className="btnB sm" onClick={() => handleAdd({onClose})}>
            저장 후 닫기
          </button>
        </span>
      </div>
    </div>
  );
};

export default RewardsBenefitModal;
