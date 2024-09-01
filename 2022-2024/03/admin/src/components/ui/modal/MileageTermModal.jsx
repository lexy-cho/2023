import React from 'react';
import { useMileagePolicyModal } from './hooks/useRewardsModal';
import { BaseButton, RadioGroup, InputArea, DragableTable, DragableItem, BaseCheckBox, ModalFormButton, SearchInput } from '@components/common';
const MileageTerm = ({ onClose }) => {
  const { view } = useMileagePolicyModal(onClose);
  return (
    <div className="fullPop mileageTermPop" id="itemAddPop" style={{ display: 'block' }}>
      <BaseButton onButtonClick={() => onClose()} className={'btnPClose'} />
      <h1 className="pt">마일리지 조건</h1>
      <div className="pBack">
        <div>
          <p className="noti">다이렉트 부킹 시스템의 마일리지 적립, 소멸 및 사용 정책은 설정된 조건에 따라 적용됩니다.</p>
          {/*  */}
          <article className="lbox">
            <div className="boxTit">
              <h3>사용 정책</h3>
            </div>
            <div className="boxDt scroll">
              <InputArea
                title={'기본 %적립'}
                add={<dd className="sNoti">회원이 결제한 금액에 적립 될 &#39;%&#39;를 숫자로 설정합니다.</dd>}
                em={'%'}
                span
                type="text"
                inputType={'num'}
                placeholder="0"
                value={view?.body?.save_percent}
                onChange={(v) => view?.handleItemChange('save_percent', v.target.value)}
              />

              <InputArea
                dlClass={'mt24'}
                add={
                  <dd className="sNoti">
                    적립된 마일리지가 실제로 유지되는 기간을 일자로 설정할 수 있습니다. <br />
                    ​적립된 마일리지 마다 개별적으로 일자를 적용합니다.
                  </dd>
                }
                title={'유지기간'}
                em={'일'}
                span
                type="text"
                inputType={'num'}
                placeholder="0"
                value={view?.body?.keep_period}
                onChange={(v) => view?.handleItemChange('keep_period', v.target.value)}
              />

              <InputArea
                dlClass={'mt24'}
                add={<dd className="sNoti">회원이 적립한 마일리지를 사용할 수 있는 최소 금액을 설정합니다.</dd>}
                title={'최소 사용 금액'}
                em={'원'}
                span
                type="text"
                inputType={'num'}
                placeholder="0"
                value={view?.body?.min_use_point}
                onChange={(v) => view?.handleItemChange('min_use_point', v.target.value)}
              />

              <InputArea
                dlClass={'mt24'}
                add={
                  <dd className="sNoti">
                    회원이 결제하는 금액을 기준으로 최대 사용 가능한 퍼센트를 설정합니다. <br />
                    ​포인트가 결제 금액보다 많더라도 퍼센트 까지의 사용으로 제한합니다.
                  </dd>
                }
                title={'최대 사용 금액'}
                em={'%'}
                span
                type="text"
                inputType={'num'}
                placeholder="0"
                value={view?.body?.max_use_point}
                onChange={(v) => view?.handleItemChange('max_use_point', v.target.value)}
              />

              <RadioGroup
                dlClass={'mt24'}
                title={'사용 단위'}
                radios={[
                  { key: 1, title: '일' },
                  { key: 10, title: '십' },
                  { key: 100, title: '백' },
                  { key: 1000, title: '천' },
                  { key: 10000, title: '만' },
                ]}
                add={<dd className="sNoti">회원이 결제한 금액에 적립될 &#39;%&#39;를 숫자로 설정합니다.</dd>}
                checkValue={view?.body?.unit_type}
                onCheck={(v) => view?.handleItemChange('unit_type', v)}
                type={'unit_type'}
              />

              <RadioGroup
                dlClass={'mt24'}
                title={'쿠폰 중복 사용'}
                radios={[
                  { key: 0, title: '가능' },
                  { key: 1, title: '불가능' },
                ]}
                add={<dd className="sNoti">마일리지 사용과 더불어 쿠폰을 복수적으로 사용할 수 있는지에 대한 여부를 설정합니다.</dd>}
                checkValue={view?.body?.use_coupon}
                onCheck={(v) => view?.handleItemChange('use_coupon', Number(v))}
                type={'use_coupon'}
              />
            </div>
          </article>
        </div>
      </div>
      <ModalFormButton
        isSubmit={view?.isSubmit}
        onCancel={() => {
          onClose();
        }}
        onSave={() => view?.handleSave()}
      />
    </div>
  );
};

export default MileageTerm;
