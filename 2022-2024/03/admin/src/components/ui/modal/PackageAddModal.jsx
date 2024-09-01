import React, { useState } from 'react';
import PackageAddEndModal from './PackageAddEndModal';

import useModal from '@components/ui/modal/hooks/useModal';
import { BaseButton, BaseCheckBox, InputArea, CoCalendar, ModalFormButton } from '@components/common';
import { useSettingPackageBasic, useSettingPackageBasicWrite } from '../../../pages/settings/product/package/hooks/useSettingPackageBasic';
import SPRoomType from '@pages/settings/product/package/components/SPRoomType';
const PackageAdd = ({ onClose, onResult }) => {
  const { Modal, handleOpenModal, handleCloseModal } = useModal();
  const { view } = useSettingPackageBasic();
  const { api } = useSettingPackageBasicWrite({ view });
  return (
    <>
      <div className="fullPop packageAddPop" id="packageAddPop" style={{ display: 'block' }}>
        <BaseButton buttonLabel={'닫기'} onButtonClick={() => onClose()} className={'btnPClose'} />

        <h1 className="pt">패키지 추가</h1>
        <div className="pBack">
          <div className="scroll">
            <article className="lbox">
              <div className="boxTit">
                <h3>기본 정보</h3>
                <span className="toggleSet">
                  <label>노출</label>
                  <BaseCheckBox
                    id="check1"
                    checked={view?.body?.is_activate === 1}
                    onCheckChange={(e) => {
                      console.log(e);
                      view.handleItemChange('is_activate', e.target.checked ? 1 : 0);
                    }}
                  />
                  {/* <input type="checkbox" /> */}
                </span>
              </div>
              <div className="boxDt">
                <div className="grid">
                  <InputArea
                    requied
                    title={'패키지 이름'}
                    type="text"
                    placeholder="패키지 이름 입력"
                    value={view?.body?.title || ''}
                    onChange={(e) => view.handleItemChange('title', e.target.value)}
                  />
                  <InputArea
                    requied
                    title={'패키지 타입'}
                    type="text"
                    placeholder="ex)AAA"
                    value={view?.body?.package_type || ''}
                    onChange={(e) => view.handleItemChange('package_type', e.target.value)}
                  />
                </div>
                <div className="grid case3_1 mt24">
                  <InputArea
                    requied
                    title={'PMS 코드'}
                    type="text"
                    placeholder="코드 입력"
                    value={view?.body?.pms_link_code || ''}
                    onChange={(e) => view.handleItemChange('pms_link_code', e.target.value)}
                  />
                  <InputArea title={'Seq'} type="text" placeholder="Seq 입력" value={view?.body?.seq || ''} onChange={(e) => view.handleItemChange('seq', e.target.value)} />
                  <InputArea title={'비고'} type="text" placeholder="비고 입력" value={view?.body?.package_memo || ''} onChange={(e) => view.handleItemChange('package_memo', e.target.value)} />
                </div>
              </div>
            </article>
            {/*  */}
            <article className="lbox">
              <div className="boxTit">
                <h3>노출 기간</h3>
              </div>
              <div className="boxDt">
                <div className="grid">
                  <dl>
                    <dt>
                      판매 시작 날짜 <sup>*</sup>
                    </dt>
                    <dd>
                      <CoCalendar onChangeDate={(date) => view.handleItemChange('resv_start_date', date)} defaultDate={view?.body?.resv_start_date} />
                      {/* <input type="text" className="cal" placeholder="2024.01.01" id="" /> */}
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      판매 종료 날짜 <sup>*</sup>
                    </dt>
                    <dd>
                      <CoCalendar onChangeDate={(date) => view.handleItemChange('resv_end_date', date)} defaultDate={view?.body?.resv_end_date} />
                    </dd>
                  </dl>
                </div>
              </div>
            </article>

            <SPRoomType
              title={'룸 타입 선택'}
              changeKey={'room_type_seq_list'}
              onHandleChange={view.handleItemChange}
              checked={view?.body?.room_type_seq_list?.map((e) => {
                return { seq: e };
              })}
              list={view?.roomTypeList?.map((e) => {
                return { id: e.room_type_seq, title: e.room_type_code };
              })}
            />
            {/*  */}
            <p className="noti">신규 추가 완료된 패키지 수정 및 삭제는 설정 &gt; 상품관리 &gt; 패키지에서 가능합니다.</p>
          </div>
        </div>
        <ModalFormButton
          onSave={async () => {
            await api?.handleSave(true, onResult);
          }}
          onCancel={() => onClose()}
          saveTitle={'신규 추가'}
          isSubmit={api?.isSubmit}
        />
      </div>
    </>
  );
};

export default PackageAdd;
