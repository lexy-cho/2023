import React, { useRef, useState } from 'react';
import { SearchInput, BaseButton, BaseCheckBox, DragableTable, DragableItem, ModalFormButton, BaseInput, SearchCheck } from '@components/common';
import useViewType, { useViewTypeApi } from './hooks/useViewType';
import SrtAlert from './SrtAlert';
import useModal from '@components/ui/modal/hooks/useModal';

const Viewtype = ({ onClose, onCallback }) => {
  const { Modal: AlertModal, handleOpenModal: handleAlertOpen, handleCloseModal } = useModal();
  const { Modal: AlertModal2, handleOpenModal: handleAlertOpen2, handleCloseModal: handleAlertClose } = useModal();
  const { Modal: AlertModal3, handleOpenModal: handleAlertOpen3, handleCloseModal: handleAlertClose3 } = useModal();
  const { view } = useViewType({ handleAlertOpen2 });
  const { api } = useViewTypeApi({ view, onClose, onCallback });

  const filterList = view?.list?.map((e) => {
    return e.room_type_list.map((e2) => e2.room_type_seq);
  });

  const filterSeq = filterList
    .filter((e) => e.length > 0)
    .join()
    .split(',');

  const filterRoomType = view?.roomTypeList?.filter((e) => !filterSeq.some((e2) => Number(e2) == e.room_type_seq));

  return (
    <div className="fullPop viewtypePop" id="viewtypePop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">뷰 타입</h1>
      <div className="pBack">
        <div className="tableAddSet">
          <div className="tls editCase scroll">
            <DragableTable
              onHandleChange={(seq, v, name) => {
                if (name === 'alert') {
                  handleAlertOpen();
                  return;
                }
                if (name === 'alert2') {
                  handleAlertOpen3();
                  return;
                }
                view?.handleUpdate(seq, v, name);
              }}
              isModal={true}
              isShiftDrag={false}
              header={view?.header}
              list={view?.list}
              ItemComponent={DragableItem}
              RowComponent={ViewTypeItem}
              checkList={filterRoomType}
              filterList={filterRoomType}
            />
          </div>
          <div className="addSet long">
            <div className="before" style={{ display: `${view?.addMode ? 'none' : 'block'}` }}>
              <BaseButton className="bAdd" onButtonClick={() => view?.setAddMode(true)} buttonLabel={'뷰타입 추가'} />
            </div>

            {view?.addMode && (
              <div className="after">
                <BaseInput
                  type="text"
                  placeholder="뷰 타입 이름"
                  defaultValue={view?.viewType.title}
                  value={view?.viewType.title}
                  className="item"
                  onChange={(e) => {
                    view?.handleViewType(e.target.value);
                  }}
                />

                <SearchCheck
                  title={'룸타입'}
                  isHeader={true}
                  list={filterRoomType?.map((e) => {
                    return { id: e.room_type_seq, title: e.room_type_code };
                  })}
                  check={view?.viewType?.room_type_list.map((e) => {
                    return { seq: e.room_type_seq };
                  })}
                  onCheck={(check) => {
                    const list =
                      check?.length > 0
                        ? check?.map((el) => {
                            return { room_type_seq: el.id, room_type_code: el.title };
                          })
                        : [];

                    view?.setViewType((prev) => ({
                      ...prev,
                      room_type_list: list,
                    }));
                  }}
                  isAll={false}
                />

                <span className="afterBtn item">
                  <BaseButton className="bID" onButtonClick={() => view?.handleAddCancel()} buttonLabel={'Del'} />
                  <BaseButton
                    className="bED"
                    onButtonClick={() => {
                      view?.handleAddViewType();
                    }}
                    buttonLabel={'Done'}
                  />
                </span>
              </div>
            )}
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

      <AlertModal2>
        <SrtAlert onClose={handleAlertClose} title={'뷰타입명을 입력해주세요.'} msg={'뷰타입을 추가하려면 뷰타입명을 입력해주세요'} />
      </AlertModal2>

      <AlertModal3>
        <SrtAlert onClose={handleAlertClose3} title={'중복된 룸타입을 선택할수 없습니다'} msg={'중복된 룸타입을 선택할수 없습니다.'} />
      </AlertModal3>

      <AlertModal>
        <SrtAlert onClose={handleCloseModal} />
      </AlertModal>
    </div>
  );
};

export const ViewTypeItem = ({ ...props }) => {
  const { num, index, el, DragHandler, onMouseDown, onMouseOver, isSelect, onHandleChange, checkList, filterList } = props;
  const [isModify, setIsModify] = useState(false);
  const [isModify2, setIsModify2] = useState(false);
  let ref = useRef();

  const list = [...checkList, ...el.room_type_list];
  console.log(list);
  console.log(el);
  return (
    <tr key={`viewtype-item-key-${num}`} style={{ zIndex: num + 100 - num * 2 }}>
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
            onHandleChange(el.view_seq, e.target.value, 'title');
          }}
        />
      </td>
      <td className="mSel">
        {!isModify2 && (
          <span className="mDim" onClick={() => setIsModify2(!isModify2)}>
            수정하기
          </span>
        )}

        <SearchCheck
          isFilter={true}
          ref={ref}
          title={el.room_type_list?.map((e) => e.room_type_code).join(',') || '룸타입설정'}
          isHeader={true}
          list={list?.map((e) => {
            return { id: e.room_type_seq, title: e.room_type_code };
          })}
          checked={el?.room_type_list.map((e) => {
            return { seq: e.room_type_seq };
          })}
          onCheck={(check) => {
            onHandleChange(
              el.view_seq,
              check.map((el) => {
                return { room_type_seq: el.id, room_type_code: el.title };
              }),
              'room_type_list'
            );
          }}
          isAll={false}
        />
      </td>
      <td className="cnd">
        <BaseButton
          className="bEX"
          onButtonClick={() => {
            if (el?.room_type_list.length > 0) {
              onHandleChange(el.view_seq, true, 'alert');
            } else {
              onHandleChange(el.view_seq, true, 'delete');
            }
          }}
          buttonLabel={'Del'}
        />
      </td>
    </tr>
  );
};

export default Viewtype;
