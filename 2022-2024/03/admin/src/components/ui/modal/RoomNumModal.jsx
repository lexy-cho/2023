import React from 'react';
import useModalRoomNum, { useModalRoomNumApi } from './hooks/useModalRoomNum';
import { SearchInput, InputDate, SearchCheck, DragableTable, DragableItem, ModalFormButton } from '@components/common';
const RoomNumModal = ({ onClose, onRefresh }) => {
  const { list, setList, headers } = useModalRoomNum();
  const { params, setParams, handleSortEnd, isSubmit, handleSave } = useModalRoomNumApi({ list, setList, onClose, onRefresh });
  console.log(list);
  return (
    <div className="fullPop packageNumPop" id="packageNumPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">노출 순서</h1>
      <div className="pBack">
        <p className="noti">현재 노출중인 룸 목록만 표시됩니다.</p>
        {/**/}
        <div className="tls scroll">
          <DragableTable
            isModal={true}
            isShiftDrag={false}
            header={headers}
            list={list}
            onSortEnd={handleSortEnd}
            ItemComponent={DragableItem}
            RowComponent={NumItem}
            helperClass={'row-class-equal dragProList'}
          />
        </div>
      </div>
      <ModalFormButton isSubmit={isSubmit} onCancel={() => onClose()} onSave={() => handleSave()} />
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
      <td>{el.room_type_name}</td>
      <td>{el.view_name}</td>
    </tr>
  );
};

export default RoomNumModal;
