import React, { useState } from 'react';
import useAmenityModal, { useAmenityModalApi } from './hooks/useAmenutyModal';
import { SearchInput, BaseButton, BaseCheckBox, DragableTable, DragableItem, ModalFormButton, BaseInput } from '@components/common';
const Amenity = ({ onClose, onCallback }) => {
  const { view } = useAmenityModal();
  const { api } = useAmenityModalApi({ view, onClose, onCallback });

  return (
    <div className="fullPop amenityPop" id="amenityPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">어메니티 설정</h1>
      <div className="pBack">
        <div className="tableAddSet">
          <div className="tls editCase scroll">
            <DragableTable
              onHandleChange={(seq, v, name) => view?.handleUpdate(seq, v, name)}
              isModal={true}
              isShiftDrag={false}
              header={view?.header}
              list={view?.list}
              ItemComponent={DragableItem}
              RowComponent={AmenityItem}
            />
          </div>
          <div className="addSet">
            <div className="before" style={{ display: `${view?.addMode ? 'none' : 'block'}` }}>
              <BaseButton className="bAdd" onButtonClick={() => view?.setAddMode(true)} buttonLabel={'어메니티 추가'} />
            </div>
            <div className="after" style={{ display: `${view?.addMode ? '' : 'none'}` }}>
              <BaseInput
                type="text"
                placeholder="어메니티 이름"
                defaultValue={view?.amenity.title}
                value={view?.amenity.title}
                className="item"
                onChange={(e) => {
                  view?.handleAmenity(e.target.value);
                }}
                maxLength={30}
              />

              <span className="afterBtn item">
                <BaseButton className="bID" onButtonClick={() => view?.setAddMode(false)} buttonLabel={'Del'} />
                <BaseButton className="bED" onButtonClick={() => view?.handleAddAmenity()} buttonLabel={'Done'} />
              </span>
            </div>
          </div>
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

export const AmenityItem = ({ ...props }) => {
  const { num, index, el, DragHandler, onMouseDown, onMouseOver, isSelect, onHandleChange } = props;
  const [isModify, setIsModify] = useState(false);
  console.log(el);
  return (
    <tr key={`amenity-item-key-${num}`}>
      <td>{num + 1}</td>
      <td className="mCol">
        {!isModify && (
          <span className="mDim" onClick={() => setIsModify(!isModify)}>
            수정하기
          </span>
        )}
        <BaseInput
          type="text"
          value={el.title}
          onChange={(e) => {
            onHandleChange(el.ameniti_seq, e.target.value, 'title');
          }}
          maxLength={30}
        />
      </td>
      <td className="cnd">
        <span className="toggleSet">
          <BaseCheckBox
            onCheckChange={(v) => {
              console.log(v.target.checked);
              onHandleChange(el.ameniti_seq, v.target.checked ? 1 : 0, 'is_use');
            }}
            defaultChecked={el.is_use === 1}
          />
        </span>
      </td>
      <td className="cnd">
        <BaseButton
          className="bEX"
          onButtonClick={() => {
            if (confirm('선택된 내역을 삭제하시겠습니까?')) {
              onHandleChange(el.ameniti_seq, true, 'delete');
            }
          }}
          buttonLabel={'Del'}
        />
      </td>
    </tr>
  );
};

export default Amenity;
