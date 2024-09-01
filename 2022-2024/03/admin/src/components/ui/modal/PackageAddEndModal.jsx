import React from 'react';
import BaseButton from '../../common/BaseButton';
import useSettingItemPackage, { useSettingItemPackageApi } from '../../../pages/settings/product/item/hooks/useSettingItemPackage';
import { RadioCheck, InputArea, CoCalendar } from '@components/common';
import { useItemAddPackageModal } from './hooks/useItemModal';
import ModalFormButton from '../../common/ModalFormButton';

const PackageAddEnd = ({ onClose, onResult, height = 280, packageSeq }) => {
  const { view } = useItemAddPackageModal({ packageSeq, onResult, onClose });

  return (
    <div className="basicPop packageAddEndPop" id="packageAddEndPop" style={{ display: 'block', height: height }}>
      <BaseButton buttonLabel={'닫기'} onButtonClick={() => onClose()} className={'btnPClose'} />
      {/* <button className="btnPClose" id="roomChoicePopClose1" onClick={() => onClose()}>
        닫기
      </button> */}
      <h1 className="pt">패키지가 신규 추가되었습니다.</h1>
      <div className="pBack">
        <p className="sNoti">아직 아이템에 패키지 등록이 필요해요. 추가 정보를 입력해주세요.</p>
        <article className="boxDt">
          <div className="grid mt24">
            <dl>
              <dt>아이템</dt>
              <dd>
                <RadioCheck
                  isHeader={true}
                  isSearch={true}
                  title={'아이템 선택'}
                  checked={
                    view?.allList
                      ?.filter((e) => e.id == view?.addItem?.item_seq)
                      .map((e) => {
                        return { id: e.id, title: e.title };
                      })[0]
                  }
                  list={view?.allList?.map((el) => {
                    return { id: el.item_seq, title: el.title };
                  })}
                  onCheck={(check) => {
                    view?.handleAddItemChange('item_seq', check.id);
                    //view?.handleAddItemChange('title', check.title);
                    //view?.handleItemChange('permission_group_seq', check.id);
                  }}
                  // ref={view?.permissionCheckRef}
                />
              </dd>
            </dl>
            <InputArea
              requied
              title={'수량'}
              type="text"
              inputType={'num'}
              placeholder="0"
              maxLength={3}
              value={view?.addItem?.item_count || ''}
              onChange={(e) => view?.handleAddItemChange('item_count', e.target.value)}
            />
          </div>
          {/* <div className="grid mt24">
            <dl>
              <dt>
                기간 입력 <sup>*</sup>
              </dt>
              <dd>
                <CoCalendar onChangeDate={(date) => view.handleItemChange('resv_start_date', date)} defaultDate={view?.body?.resv_start_date} />

              </dd>
            </dl>
            <div></div>
          </div> */}
        </article>
      </div>
      <ModalFormButton
        onSave={async () => {
          await view?.handleSave();
        }}
        onCancel={() => close()}
        saveTitle={'신규 추가'}
        isSubmit={view?.isSubmit}
      />

      {/* <div className="pBtn">
        <span className="fr">
          <button className="btnL sm">아니요, 다음에 할게요</button>
          <button className="btnB sm">저장 후 닫기</button>
        </span>
      </div> */}
    </div>
  );
};

export default PackageAddEnd;
