import React, { useContext, useState } from 'react';
import ItemAddEndModal from './ItemAddEndModal';
import { ModalPresent, InputArea, RadioGroup, SelectRadio, BaseCheckBox } from '@components/common';
import { useItemAddModal } from './hooks/useItemModal';
import ContentsExposureDatePicker from '../contents/ContentsExposureDatePicker';
import useContentsExposureDatePicker from '@components/ui/contents/hooks/useContentsExposureDatePicker';
import ItemRoomType from '../contents/ItemRoomType';
import { useSettingItemBasic } from '@pages/settings/product/item/hooks/useSettingItemView';
import { useSettingItemWrite } from '@pages/settings/product/item/hooks/useSettingItemView';
import BasicCalendar from '@pages/settings/product/components/BasicCalendar';
import types from '@data/code.json';
const ItemAdd = ({ onClose, onRefresh }) => {
  const useExposureProps = useContentsExposureDatePicker({ id: '#pBack', startTitle: '판매 시작 날짜', endTitle: '판매 종료 날짜' });
  //const { view } = useItemAddModal({ ...useExposureProps, onRefresh, onClose });
  const isModal = {};
  const modalProps = { onRefresh, onClose };
  const { view } = useSettingItemBasic();
  const { api } = useSettingItemWrite({ view, isModal, ...modalProps });
  // const getApi = (viewMode, view, viewId) => {
  //   if (viewMode === 'write') {
  //     return useSettingItemWrite({ view });
  //   } else {
  //     return useSettingItemModify({ view, viewId });
  //   }
  // };

  // const { api } = getApi(viewMode, view, viewId);

  return (
    <>
      <div className="fullPop itemAddPop" id="itemAddPop" style={{ display: 'block' }}>
        <button className="btnPClose" onClick={() => onClose()}>
          닫기
        </button>
        <h1 className="pt">아이템 추가</h1>
        <div className="pBack">
          <div className="scroll">
            <article className="lbox">
              <div className="boxTit">
                <h3>기본 정보</h3>
              </div>
              <div className="boxDt">
                <div className="grid">
                  <InputArea
                    requied
                    title={'아이템 이름'}
                    type="text"
                    defaultValue={view?.body?.title || ''}
                    placeholder="아이템 이름 입력"
                    onChange={(e) => view?.handleItemChange('title', e.target.value)}
                  />

                  <InputArea
                    maxLength={3}
                    requied
                    title={'아이템 타입'}
                    type="text"
                    defaultValue={view?.body?.item_type || ''}
                    placeholder="ex)AAA"
                    onChange={(e) => view?.handleItemChange('item_type', e.target.value)}
                  />
                </div>
                <InputArea
                  dlClass={'mt24'}
                  title={'설명'}
                  type="text"
                  defaultValue={view?.body?.contents || ''}
                  placeholder="설명 입력"
                  onChange={(e) => view?.handleItemChange('contents', e.target.value)}
                />

                <div className="grid case3_1 mt24">
                  <InputArea
                    title={'PMS 코드'}
                    type="text"
                    defaultValue={view?.pbody?.ms_link_code || ''}
                    placeholder="코드 입력"
                    onChange={(e) => view?.handleItemChange('pms_link_code', e.target.value)}
                  />

                  <InputArea title={'Seq'} type="text" defaultValue={view?.body?.seq || ''} placeholder="Seq 입력" onChange={(e) => view?.handleItemChange('seq', e.target.value)} />
                  <InputArea title={'금액'} inputType={'num'} type="text" placeholder="금액 입력" value={view?.body?.price || ''} onChange={(e) => view.handleItemChange('price', e.target.value)} />
                  <div></div>
                </div>
              </div>
            </article>
            {/*  */}
            <article className="lbox">
              <div className="boxTit">
                <h3>아이템 상세</h3>
              </div>
              <div className="boxDt">
                <div className="grid">
                  {/* <ContentsExposureDatePicker {...useExposureProps} /> */}
                  <BasicCalendar title={'시작 날짜'} requied handleItemChange={(name, date) => view.handleItemChange(name, date)} name={'sale_start_date'} value={view?.body?.sale_start_date} />
                  <BasicCalendar title={'종료 날짜'} requied handleItemChange={(name, date) => view.handleItemChange(name, date)} name={'sale_end_date'} value={view?.body?.sale_end_date} />
                </div>
                <div className="grid mt24">
                  <RadioGroup
                    title={'성인/어린이 구분'}
                    radios={types?.targetType}
                    type={'target'}
                    onCheck={(e) => view?.handleItemChange('is_target_type', e)}
                    checkValue={view?.body?.is_target_type}
                  />

                  <InputArea
                    title={'1일 구매 가능 수량'}
                    type="text"
                    inputType={'num'}
                    defaultValue={view?.is_per_day_sale_count || ''}
                    placeholder="0"
                    onChange={(e) => view?.handleItemChange('is_per_day_sale_count', e.target.value)}
                  />
                </div>
              </div>
            </article>
            {/*  */}
            <ItemRoomType roomTypeList={view?.roomTypeList} ref={view?.roomTypeRef} checked={view?.body?.room_type_seq_list} onHandleChange={(name, value) => view?.handleItemChange(name, value)} />

            <article className="lbox">
              <div className="boxTit">
                <h3>판매 옵션 설정</h3>
                <span className="toggleSet">
                  <label>사용</label>
                  <BaseCheckBox onCheckChange={(e) => view?.handleItemChange('is_sale_option_flag', e.target.checked ? 1 : 0)} checked={view?.body?.is_sale_option_flag === 1} />
                </span>
              </div>
              <div className="boxDt">
                <div className="grid">
                  <SelectRadio
                    list={view?.itemList.map((e) => {
                      return { key: e.item_seq, title: e.title };
                    })}
                    requied
                    title={'선 판매 아이템'}
                    name={'pre_sale_item_seq'}
                    checked={
                      view?.body?.pre_sale_item_seq > 0
                        ? Object.assign(
                            {},
                            {
                              key: view?.itemList?.find((e) => e.item_seq === view?.body?.pre_sale_item_seq)?.item_seq,
                              title: view?.itemList?.find((e) => e.item_seq === view?.body?.pre_sale_item_seq)?.title,
                            }
                          )
                        : undefined
                    }
                    onCheck={(name, value) => view?.handleItemChange(name, value.key)}
                  />

                  <SelectRadio
                    list={types.condition}
                    checked={
                      view?.body?.pre_sale_condition > 0
                        ? Object.assign(
                            {},
                            {
                              key: types.condition?.find((e) => Number(e.key) === view?.body?.pre_sale_condition)?.key,
                              title: types.condition?.find((e) => Number(e.key) === view?.body?.pre_sale_condition)?.title,
                            }
                          )
                        : undefined
                    }
                    requied
                    title={'사용 가능일'}
                    name={'pre_sale_condition'}
                    onCheck={(name, value) => view?.handleItemChange(name, value.key)}
                  />
                  {/* <dl>
                    <dt>선 판매 아이템</dt>
                    <dd>
                      <input type="text" placeholder="0" />
                    </dd>
                  </dl>
                  <SelectRadio list={view?.condition} requied title={'사용 가능일'} name={'pre_sale_condition'} onCheck={(name, value) => view?.handleItemChange(name, value.key)} /> */}
                </div>
              </div>
            </article>
            {/*  */}
            <p className="noti mt12">신규 추가 완료된 아이템 수정 및 삭제는 설정 &gt; 상품관리 &gt; 아이템에서 가능합니다.</p>
          </div>
        </div>
        <div className="pBtn">
          <span className="fr">
            <button className="btnL sm" onClick={() => onClose()}>
              취소
            </button>
            <button className="btnB sm" onClick={() => api?.handleSave()}>
              저장 후 닫기
            </button>
          </span>
        </div>
      </div>

      {/* {isModal2 && (
        <ModalPresent>
          <ItemAddEndModal
            onClose={() => {
              setIsModal2(false);
            }}
          />
        </ModalPresent>
      )} */}
    </>
  );
};

export default ItemAdd;
