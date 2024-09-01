import React from 'react';
import usePromotionNum, { usePromotionNumApi } from './hooks/usePromotionNum';
import { DragableTable, DragableItem, ModalFormButton } from '@components/common';
const PromotionNum = ({ onClose }) => {
  const { view } = usePromotionNum();
  const { api } = usePromotionNumApi({ view, onClose });

  return (
    <div className="fullPop promotionNumPop" id="promotionNumPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">노출 순서</h1>
      <div className="pBack">
        <p className="noti">현재 노출중인 프로모션 목록만 표시됩니다.</p>
        {/**/}
        <div className="tls scroll">
          <DragableTable
            isModal={true}
            isShiftDrag={false}
            header={view?.headers}
            list={view?.list?.promotion_list}
            onSortEnd={api?.handleSortEnd}
            ItemComponent={DragableItem}
            RowComponent={NumItem}
            helperClass={'row-class-equal dragProList'}
          />
        </div>
      </div>
      <ModalFormButton
        isSubmit={api?.isSubmit}
        onCancel={() => {
          onClose();
        }}
        onSave={() => api?.handleSave()}
      />
    </div>
  );
};

export const NumItem = ({ ...props }) => {
  const { num, index, el, DragHandler, onMouseDown, onMouseOver, isSelect } = props;

  return (
    <tr>
      <td>
        <DragHandler />
      </td>
      <td>{el.title}</td>
      <td>{el.tag_hotel_list.map((el) => el.hotel_name).join(',')}</td>
    </tr>
  );
};

export default PromotionNum;
