import React, { useState } from 'react';
import { SearchInput, InputDate, SearchCheck, DragableTable, DragableItem, ModalFormButton, BaseInput } from '@components/common';
import useRoomAmount, { useRoomAmountApi } from './hooks/useRoomAmount';

const RoomAmount = ({ onClose }) => {
  const { view } = useRoomAmount();
  const { api } = useRoomAmountApi({ view, onClose });

  const totalCnt = view?.asList?.reduce((acc, crr) => {
    return acc + Number(crr.room_quantity) || 0;
  }, 0);

  const tobeCnt = view?.list?.reduce((acc, crr) => {
    return acc + Number(crr.room_quantity) || 0;
  }, 0);

  return (
    <div className="fullPop roomAmountPop" id="roomAmountPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">룸 수량</h1>
      <div className="pBack">
        <div className="tls editCase scroll">
          <DragableTable
            isModal={true}
            isShiftDrag={false}
            header={view?.headers}
            list={view?.list}
            ItemComponent={DragableItem}
            RowComponent={RoomAmountItem}
            onHandleChange={(seq, v, name) => view?.handleUpdate(seq, v, name)}
          />
        </div>
      </div>
      <div className="pBtn">
        <span className="fl">
          총 객실 {totalCnt} <span>수정 후 {tobeCnt}</span>
        </span>
        <ModalFormButton isSubmit={api?.isSubmit} onCancel={() => onClose()} onSave={() => api?.handleSave()} />
      </div>
    </div>
  );
};

export const RoomAmountItem = ({ ...props }) => {
  const { num, index, el, DragHandler, onMouseDown, onMouseOver, isSelect, onChange, onHandleChange, checkList } = props;

  const [isModify, setIsModify] = useState(false);
  return (
    <tr key={`room-amount-item-key-${el.room_type_seq}`}>
      <td>{el.is_activate === 0 ? '활성화' : '비활성화'}</td>
      <td>{el.room_type_name}</td>
      <td>{el.room_type_code}</td>
      <td className="mCol">
        {!isModify && (
          <span className="mDim" onClick={() => setIsModify(!isModify)}>
            수정하기
          </span>
        )}
        {/* <span className="mDim">수정하기</span> */}
        <BaseInput
          type="text"
          inputType={'num'}
          value={el.room_quantity}
          onChange={(e) => {
            onHandleChange(el.room_type_seq, e.target.value, 'room_quantity');
          }}
        />
      </td>
    </tr>
  );
};

export default RoomAmount;
