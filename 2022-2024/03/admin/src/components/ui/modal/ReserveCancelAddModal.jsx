import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { SearchCheck, SelectRadio, InputArea, DragableItem, DragableTable, BaseInput, BaseButton, RadioCheck, ModalFormButton } from '@components/common';
import { useResvCancelModify, useResvCancelView, useResvCancelWrite } from './hooks/useResvModal';
import useModalResvQuery from './service/queries/useModalResvQuery';

export const CancelContext = createContext();

const ReserveCancelAdd = ({ onClose, viewMode = 'write', onRefresh, viewId = undefined }) => {
  const { view } = useResvCancelView();

  const getApi = (viewMode, view, viewId, onClose, onRefresh) => {
    if (viewMode === 'write') {
      return useResvCancelWrite({ view, onClose, onRefresh });
    } else {
      return useResvCancelModify({ view, viewId, onClose, onRefresh });
    }
  };

  const { api } = getApi(viewMode, view, viewId, onClose, onRefresh);

  return (
    <div className="fullPop reserveCancelAddPop" id="reserveCancelAddPop" style={{ display: 'block' }}>
      <BaseButton buttonLabel={'닫기'} onButtonClick={onClose} className={'btnPClose'} />

      <h1 className="pt">취소 규정 상세</h1>
      <div className="pBack">
        <article className="lbox">
          <div className="boxTit">
            <h3>기본 정보</h3>
          </div>
          <div className="boxDt">
            <InputArea title={'취소 규정 이름'} placeholder="기본 취소 규정" requied onChange={(e) => view?.handleBodyChange('title', e.target.value)} value={view?.body?.title} />
          </div>
        </article>
        {/**/}
        <div className="grid mt12">
          <article className="lbox listCase left">
            <div className="boxTit">
              <h3>환불 설정</h3>
            </div>
            <div className="boxDt">
              <div className="tableAddSet">
                <div className="tls editCase scroll">
                  <DragableTable
                    isModal={true}
                    isShiftDrag={false}
                    header={view?.headers}
                    list={view?.refundList}
                    ItemComponent={DragableItem}
                    RowComponent={RefundItem}
                    onSortEnd={view?.handleSortEnd}
                    comCallback={view?.handleListItemChange}
                  />
                </div>
                <div className="addSet">
                  <div className="before" style={{ display: view?.addMode ? 'none' : '' }}>
                    <BaseButton buttonLabel={'일자 추가'} onButtonClick={() => view?.setAddMode(true)} className={'bAdd'} />
                  </div>
                  {view?.addMode && (
                    <div className="after">
                      <BaseInput inputType={'num'} maxLength={3} placeholder="일자 입력(~일 전)" className="item" onChange={(e) => view?.handleItemChange('cancel_condition', e.target.value)} />
                      <BaseInput inputType={'num'} maxLength={3} placeholder="%" className="item" onChange={(e) => view?.handleItemChange('cancel_percent', e.target.value)} />

                      <span className="afterBtn item">
                        <BaseButton buttonLabel={'Del'} onButtonClick={() => view?.setAddMode(false)} className={'bID'} />
                        <BaseButton buttonLabel={'Done'} onButtonClick={() => view?.handleAddItem()} className={'bED'} />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
          <article className="lbox listCase right">
            <div className="boxTit">
              <h3>적용 시즌코드</h3>
            </div>
            <div className="boxDt">
              <div className={`tableAddSet ${view?.seasonList.length == 0 ? 'noSetting' : ''}`}>
                {/* 시즌 설정 안할 경우 noSetting 추가 */}
                <div className="tls editCase scroll">
                  <CancelContext.Provider value={view}>
                    <DragableTable
                      isModal={true}
                      isShiftDrag={false}
                      header={view?.seasonHeaders}
                      list={view?.seasonList}
                      ItemComponent={DragableItem}
                      RowComponent={SeasonItem}
                      onSortEnd={view?.handleSortEnd}
                      comCallback={view?.handleListSeasonItemChange}
                      nullMsg={'설정되지 않은 시즌코드는 기본 취소 규정으로 정의됩니다.'}
                    />
                  </CancelContext.Provider>
                </div>
                <div className="addSet long">
                  {/* 시즌 설정 안할 경우 div 안보이기 */}
                  <div className="before" style={{ display: view?.addSeasonMode ? 'none' : '' }}>
                    <BaseButton buttonLabel={'시즌 코드'} onButtonClick={() => view?.setAddSeasonMode(true)} className={'bAdd'} />
                  </div>
                  {view?.addSeasonMode && (
                    <div className="after">
                      <RadioCheck
                        isHeader={true}
                        isSearch={true}
                        title={'시즌 클래스 선택'}
                        checked={
                          view?.allSeasonList
                            ?.filter((e) => e.season_class_seq == view?.season.season_class_seq)
                            .map((e) => {
                              return { id: e.season_class_seq, title: e.title };
                            })[0]
                        }
                        list={view?.allSeasonList?.map((el) => {
                          return { id: el.season_class_seq, title: el.title };
                        })}
                        onCheck={(check) => {
                          console.log(check);
                          view?.handleSeasonChange('season_class_seq', check.id);
                          view?.getList(check.id);
                        }}
                      />

                      <RadioCheck
                        isHeader={true}
                        isSearch={true}
                        title={'시즌 코드 선택'}
                        checked={
                          view?.allSeasonCode
                            ?.filter((e) => e.season_code_seq == view?.season.season_code_seq)
                            .map((e) => {
                              return { id: e.season_code_seq, title: e.title };
                            })[0]
                        }
                        list={view?.allSeasonCode?.map((el) => {
                          return { id: el.season_code_seq, title: el.title };
                        })}
                        onCheck={(check) => {
                          console.log(check);
                          view?.handleSeasonChange('season_code_seq', check.id);
                        }}
                      />

                      <span className="afterBtn item">
                        <BaseButton buttonLabel={'Del'} onButtonClick={() => view?.setAddSeasonMode(false)} className={'bID'} />
                        <BaseButton buttonLabel={'Done'} onButtonClick={() => view?.handleAddSeasonItem()} className={'bED'} />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <ModalFormButton isSubmit={api?.isSubmit} onCancel={() => onClose()} onSave={() => api?.handleSave()} />
    </div>
  );
};

export const RefundItem = ({ ...props }) => {
  let itemRef = useRef();

  const { num, index, el, DragHandler, onMouseDown, onMouseOver, isSelect, onHandleChange, checkList, filterList, comCallback } = props;
  const [change, setChange] = useState({ condition: false, percent: false });
  console.log(el);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (itemRef.current && !itemRef.current.contains(event.target)) {
        setChange({ condition: false, percent: false });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <tr key={`resv-refund-key-${num}`} ref={itemRef}>
      <td className="cnd">
        <DragHandler />
        {/* <button className="bMove">Move</button> */}
      </td>
      <td className="mCol">
        {!change?.condition && (
          <span className="mDim" onClick={() => setChange((prev) => ({ ...prev, condition: true }))}>
            수정하기
          </span>
        )}

        <BaseInput
          type="text"
          inputType={'num'}
          maxLength={3}
          value={el?.cancel_condition}
          placeholder="일자 입력(~일 전)"
          onChange={(e) => comCallback({ type: 'change', key: 'cancel_condition', index: num, data: e.target.value })}
        />
      </td>
      <td className="mCol">
        {!change?.setChange && (
          <span className="mDim" onClick={() => setChange((prev) => ({ ...prev, percent: true }))}>
            수정하기
          </span>
        )}

        <BaseInput
          type="text"
          inputType={'num'}
          maxLength={3}
          value={el?.cancel_percent}
          placeholder="%"
          onChange={(e) => comCallback({ type: 'change', key: 'cancel_percent', index: num, data: e.target.value })}
        />
      </td>
      <td className="cnd">
        <BaseButton buttonLabel={'Del'} onButtonClick={() => comCallback({ type: 'del', index: num })} className={'bEX'} />
      </td>
    </tr>
  );
};

export const SeasonItem = ({ ...props }) => {
  let itemRef = useRef();
  const [allSeasonCode, setAllSeasonCode] = useState();
  const { num, index, el, DragHandler, onMouseDown, onMouseOver, isSelect, onHandleChange, checkList, filterList, comCallback } = props;
  const [change, setChange] = useState({ season: false, code: false });
  console.log(el);

  const view = useContext(CancelContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (itemRef.current && !itemRef.current.contains(event.target)) {
        setChange({ season: false, code: false });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const { getSeasonCodeList } = useModalResvQuery();
  const getList = async (season_class_seq) => {
    const p = {
      keyword: '',
      season_class_seq: season_class_seq, // 0이면 필터 제외 , 시즌 클래스 보내면 해당 클래스 하위 시즌 코드 리턴
      is_paging: false,
      item_count_per_page: 100,
      page: 1,
    };
    const list = await getSeasonCodeList(p);

    setAllSeasonCode(list?.season_code_list);
    //console.log('getSeasonCodeList --> ', list);
  };

  useEffect(() => {
    if (el) getList(el?.season_class_seq);
  }, [el]);
  //getList(el?.season_class_seq);

  return (
    <tr key={`resv-season-key-${num}`} ref={itemRef}>
      <td className="mCol">
        {!change?.season && (
          <span className="mDim" onClick={() => setChange((prev) => ({ ...prev, season: true }))} style={{ zIndex: 19 }}>
            수정하기
          </span>
        )}

        <RadioCheck
          isHeader={true}
          isSearch={true}
          title={'시즌 클래스 선택'}
          checked={
            view?.allSeasonList
              ?.filter((e) => e.season_class_seq == el?.season_class_seq)
              .map((e) => {
                return { id: e.season_class_seq, title: e.title };
              })[0]
          }
          list={view?.allSeasonList?.map((el) => {
            return { id: el.season_class_seq, title: el.title };
          })}
          onCheck={(check) => {
            console.log('RadioCheck ==> ', check);
            //view?.handleListSeasonItemChange('season_class_seq', check.id);
            comCallback({ type: 'change', key: 'season_class_seq', index: num, data: check.id });
          }}
        />
      </td>
      <td className="mCol">
        {!change?.code && (
          <span className="mDim" onClick={() => setChange((prev) => ({ ...prev, code: true }))} style={{ zIndex: 19 }}>
            수정하기
          </span>
        )}

        <RadioCheck
          isHeader={true}
          isSearch={true}
          isReset
          title={'시즌 코드 선택'}
          checked={
            allSeasonCode
              ?.filter((e) => e.season_code_seq == el?.season_code_seq)
              .map((e) => {
                return { id: e.season_code_seq, title: e.title };
              })[0]
          }
          list={allSeasonCode?.map((el) => {
            return { id: el.season_code_seq, title: el.title };
          })}
          onCheck={(check) => {
            console.log('RadioCheck ==> ', check);
            comCallback({ type: 'change', key: 'season_code_seq', index: num, data: check.id });
            //getList(check.id);
            //view?.handleSeasonChange('season_code_seq', check.id);
          }}
        />
      </td>
      <td className="cnd">
        <BaseButton buttonLabel={'Del'} onButtonClick={() => comCallback({ type: 'del', index: num })} className={'bEX'} />
      </td>
    </tr>
  );
};

export default ReserveCancelAdd;
