import React from 'react';
import usePromotionMain, { usePromotionMainApi } from './hooks/usePromotionMain';
import { SearchInput, DragableTable, DragableItem, ModalFormButton } from '@components/common';
const PromotionMain = ({ onClose }) => {
  const { view } = usePromotionMain();

  const { setParams, handleSortEnd, handleSearch, handleSave, isSubmit } = usePromotionMainApi({ view, onClose });

  return (
    <div className="fullPop promotionMainPop" id="promotionMainPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">메인 설정</h1>
      <div className="pBack">
        <p className="noti">홈페이지 메인 프로모션에 대표로 노출시킬 4개 항목을 선택합니다. 위에서 아래로 순서대로 노출됩니다.</p>
        {/**/}
        <div className="mainSetList">
          <article className="lbox listCase">
            <div className="boxTit">
              <div className="left">
                <h3>프로모션 목록</h3>
                <SearchInput
                  onHandleSearch={() => {
                    handleSearch();
                  }}
                  defaultValue={view?.keyword}
                  placeholder={'프로모션 검색'}
                  onHandleChange={(e) => view?.setKeyword(e)}
                />
              </div>
            </div>
            <div className="boxDt scroll">
              <div className="tls">
                <DragableTable
                  isModal={true}
                  isShiftDrag={false}
                  header={view?.headers}
                  list={view?.allList?.all_promotion_list}
                  ItemComponent={DragableItem}
                  RowComponent={AllItem}
                  helperClass={'row-class-equal dragProList'}
                  onAllCheck={view?.handleAllCheck}
                  onChange={view?.handleCheck}
                  checkList={view?.mainList?.main_promotion_list}
                />
              </div>
            </div>
          </article>
          <button className="move">이동</button>
          <article className="lbox listCase">
            <div className="boxTit">
              <h3>메인 설정 목록</h3>
            </div>
            <div className="boxDt scroll">
              <div className="tls">
                <DragableTable
                  isModal={true}
                  isShiftDrag={false}
                  header={view?.mainHeaders}
                  list={view?.mainList?.main_promotion_list}
                  onSortEnd={handleSortEnd}
                  ItemComponent={DragableItem}
                  RowComponent={MainItem}
                  helperClass={'row-class-equal dragProList'}
                  onDelete={view?.handleDelete}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
      <ModalFormButton
        isSubmit={isSubmit}
        onCancel={() => {
          onClose();
        }}
        onSave={() => handleSave()}
      />
    </div>
  );
};

export const AllItem = ({ ...props }) => {
  const { num, index, el, DragHandler, onMouseDown, onMouseOver, isSelect, onChange, checkList } = props;

  return (
    <tr key={`promo-key-${num + 1}`}>
      <td>
        <span className="checkSet">
          <input type="checkbox" checked={checkList?.some((e) => e.promotion_seq === el.promotion_seq)} id="" onChange={(e) => onChange(el, e)} />
        </span>
      </td>
      <td>{el.title}</td>
      <td>{el.tag_hotel_list?.map((el) => el.hotel_name).join(',')}</td>
    </tr>
  );
};

export const MainItem = ({ ...props }) => {
  const { num, index, el, DragHandler, onMouseDown, onMouseOver, isSelect, onDelete } = props;
  return (
    <tr>
      <td>
        <DragHandler />
      </td>
      <td>{el.title}</td>
      <td>{el.tag_hotel_list?.map((el) => el.hotel_name).join(',')}</td>
      <td>
        <button className="bEX" onClick={() => onDelete(el)}>
          Del
        </button>
      </td>
    </tr>
  );
};

export default PromotionMain;
