import { SearchCheck, SelectRadio, InputArea, DragableItem, DragableTable, BaseInput, BaseButton } from '@components/common';
import React, { useEffect, useRef, useState } from 'react';
import useAmountAddModal from './hooks/useAmountAddModal';
import codeData from '@data/code.json';

/**
 * SearchCheck id 가 겹치는 이슈가 있어서 앞에 *_id 로 진행
 * @param {*} param0
 * @returns
 */
const AmountAddModal = ({ onClose, view, detail }) => {
  const { modal } = useAmountAddModal({ detail, onClose });

  const ref1 = useRef();
  const ref2 = useRef();

  return (
    <div className="fullPop amountAddPop" id="amountAddPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">코드 추가</h1>
      <div className="pBack">
        <div className="mTab">
          <span>
            <button className={modal.tab === 1 ? 'on' : ''} onClick={() => modal.setTab(1)}>
              기본 정보
            </button>
            <button className={modal.tab === 2 ? 'on' : ''} onClick={() => modal.setTab(2)}>
              컨디션 설정
            </button>
          </span>
        </div>
        {/* 기본 정보 Tab */}
        {modal.tab === 1 && (
          <div>
            <article className="lbox">
              <div className="boxTit">
                <h3>기본 정보</h3>
              </div>
              <div className="boxDt">
                <SelectRadio
                  list={modal.seasonCode?.map((e) => {
                    return { key: 'seasonCode_' + e.season_code_seq, title: e.title };
                  })}
                  requied
                  title={'시즌 코드'}
                  name={'season_code_seq'}
                  checked={
                    modal?.params?.season_code_seq
                      ? Object.assign(
                          {},
                          {
                            key: 'seasonCode_' + modal.seasonCode?.find((e) => 'seasonCode_' + e.season_code_seq === modal?.params?.season_code_seq)?.season_code_seq,
                            title: modal.seasonCode?.find((e) => 'seasonCode_' + e.season_code_seq === modal?.params?.season_code_seq)?.title,
                          }
                        )
                      : undefined
                  }
                  onCheck={(name, value) => modal?.handleChange(name, value)}
                />
                <dl className="mt24">
                  <dt>
                    룸 타입 <sup>*</sup>
                  </dt>
                  <dd>
                    <SearchCheck
                      ref={ref1}
                      title={'선택하세요'}
                      list={modal?.roomTypeList?.map((e) => {
                        return { id: e.room_type_seq, title: e.room_type_code };
                      })}
                      onCheck={(check) => {
                        // let id = check.map((el) => el.id);
                        modal?.handleChange('room_type_seq_list', check);
                      }}
                      isCheckSync={false}
                      // FIXME : modal?.params?.room_type_seq_list가 list형태로 수정될 때 재확인 필요합니다.
                      checked={modal?.params?.room_type_seq_list?.map((e) => {
                        return { seq: e };
                      })}
                      isAll={false}
                      isChipCase={true}
                      readOnly={false}
                    />
                  </dd>
                </dl>
                <div className="grid mt24">
                  <dl>
                    <dt>
                      마켓 코드 <sup>*</sup>
                    </dt>
                    <dd>
                      <SearchCheck
                        title={'선택하세요'}
                        list={modal?.marketCode?.map((e) => {
                          return { id: 'marketCode_' + e?.market_category_seq, title: e.title };
                        })}
                        onCheck={(check) => {
                          let id = check.map((el) => el.id);
                          modal?.handleChange('market_code_seq_list', id);
                        }}
                        isCheckSync={false}
                        checked={modal?.params?.market_code_seq_list?.map((e) => {
                          return { seq: e };
                        })}
                        isAll={false}
                        isChipCase={true}
                        readOnly={false}
                      />
                    </dd>
                  </dl>
                  <dl>
                    <dt>소스 코드</dt>
                    <dd>
                      <SearchCheck
                        title={'선택하세요'}
                        list={modal?.sourceCode?.map((e) => {
                          return { id: 'sourceCode_' + e.source_code_seq, title: e.title };
                        })}
                        onCheck={(check) => {
                          let id = check.map((el) => el.id);
                          modal?.handleChange('source_code_seq_list', id);
                        }}
                        isCheckSync={false}
                        checked={modal?.params?.source_code_seq_list?.map((e) => {
                          return { seq: e };
                        })}
                        isAll={false}
                        isChipCase={true}
                        readOnly={false}
                      />
                    </dd>
                  </dl>
                </div>
              </div>
            </article>
            {/**/}
            <article className="lbox">
              <div className="boxTit">
                <h3>금액</h3>
              </div>
              <div className="boxDt">
                <div className="grid case3">
                  <InputArea title={'기본 금액'} requied type="text" placeholder="0" value={modal.params?.price || ''} onChange={(e) => modal.handleChange('price', e.target.value)} />

                  <InputArea
                    title={'추가 어른 금액'}
                    requied
                    type="text"
                    placeholder="0"
                    value={modal.params?.additional_adult_price || ''}
                    onChange={(e) => modal.handleChange('additional_adult_price', e.target.value)}
                  />

                  <InputArea
                    title={'추가 어린이 금액'}
                    requied
                    type="text"
                    placeholder="0"
                    value={modal.params?.additional_child_price || ''}
                    onChange={(e) => modal.handleChange('additional_child_price', e.target.value)}
                  />
                </div>
              </div>
            </article>
          </div>
        )}
        {/* end 기본 정보 */}
        {/* 컨디션 설정 Tab */}
        {modal.tab === 2 && (
          <div>
            <div className="tableAddSet">
              <div className="tls editCase scroll">
                <DragableTable
                  isModal={true}
                  isShiftDrag={false}
                  header={modal.headers}
                  list={modal.params?.rate_code_condition}
                  ItemComponent={DragableItem}
                  RowComponent={ModalItem}
                  modal={modal}
                  // onSortEnd={view?.handleSortEnd}
                  comCallback={modal?.handleItemUpdate}
                />
              </div>
              <div className="addSet" key={modal.tempKey}>
                <div className="before" style={{ display: 'none' }}>
                  <button className="bAdd">컨디션 추가</button>
                </div>
                <div className="after">
                  <SelectRadio
                    list={codeData.conditionType?.map((e) => {
                      return { key: e.key, title: e.title };
                    })}
                    name={'condition_type'}
                    checked={
                      modal.condition?.condition_type
                        ? Object.assign(
                            {},
                            {
                              key: codeData.conditionType?.find((e) => e.key === modal?.condition?.condition_type)?.key,
                              title: codeData.conditionType?.find((e) => e.key === modal?.condition?.condition_type)?.title,
                            }
                          )
                        : undefined
                    }
                    onCheck={(name, value) => modal?.handleConditionChange(name, value)}
                  />

                  <BaseInput type="text" placeholder="도달점 입력" value={modal.condition.condition_point} onChange={(e) => modal?.handleConditionChange('condition_point', e.target.value)} />

                  <SelectRadio
                    list={modal?.rateCode?.map((e) => {
                      return { key: 'rateCode_' + e.rate_code_seq, title: e.title };
                    })}
                    name={'connect_code_seq'}
                    checked={
                      modal?.condition?.connect_code_seq
                        ? Object.assign(
                            {},
                            {
                              key: 'rateCode_' + modal.rateCode?.find((e) => 'rateCode_' + e.rate_code_seq === modal?.condition?.connect_code_seq)?.rate_code_seq,
                              title: modal.rateCode?.find((e) => 'rateCode_' + e.rate_code_seq === modal?.condition?.connect_code_seq)?.title,
                            }
                          )
                        : undefined
                    }
                    onCheck={(name, value) => {
                      modal?.handleConditionChange(name, value);
                    }}
                  />

                  <span className="afterBtn item">
                    <button className="bID" onClick={modal.resetCondition}>
                      Del
                    </button>
                    <button className="bED" onClick={modal.handleConditionAdd}>
                      Done
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <p className="noti mt12">컨디션 추가시 '타입'과 '도달점' 은 기존과 중복이 없어야 합니다.</p>
          </div>
        )}
        {/* end 컨디션 설정 */}
      </div>
      <div className="pBtn">
        <span className="fr">
          <button className="btnL sm" onClick={() => onClose()}>
            취소
          </button>
          {!detail && (
            <button
              className="btnB sm"
              onClick={() => {
                view.handleItemAdd(modal.params, onClose);
                //에러없을 떄 닫기 구현
                // if (onClose) onClose();
              }}
            >
              신규 추가
            </button>
          )}
          {detail && (
            <button
              className="btnB sm"
              onClick={() => {
                view?.handleItemModify(modal.params, detail?.index);
                if (onClose) onClose();
              }}
            >
              수정
            </button>
          )}
        </span>
      </div>
    </div>
  );
};

export const ModalItem = ({ ...props }) => {
  const { num, index, el, DragHandler, onMouseDown, onMouseOver, isSelect, comCallback, modal, idx } = props;

  const [change, setChange] = useState({
    conditionType: false,
    condition_point: false,
    notes: false,
  });

  const handleChangeMode = (name) => {
    setChange((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <tr>
      <td className="mSel">
        <span className="mDim" style={{ display: `${change.conditionType ? 'none' : ''}` }} onClick={() => handleChangeMode('conditionType')}>
          수정하기
        </span>
        <SelectRadio
          list={codeData.conditionType?.map((e) => {
            return { key: e.key, title: e.title };
          })}
          name={'condition_type'}
          checked={
            el?.condition_type
              ? Object.assign(
                  {},
                  {
                    key: codeData.conditionType?.find((e) => e.key === el.condition_type)?.key,
                    title: codeData.conditionType?.find((e) => e.key === el.condition_type)?.title,
                  }
                )
              : undefined
          }
          onCheck={(name, value) => comCallback(el, idx, name, value.key)}
        />
      </td>
      <td className="mCol">
        <span className="mDim" style={{ display: `${change.condition_point ? 'none' : ''}` }} onClick={() => handleChangeMode('condition_point')}>
          수정하기
        </span>
        <BaseInput type="text" value={el?.condition_point} onChange={(e) => comCallback(el, idx, 'condition_point', e.target.value)} />
      </td>
      <td className="mSel">
        <span className="mDim" style={{ display: `${change.notes ? 'none' : ''}` }} onClick={() => handleChangeMode('notes')}>
          수정하기
        </span>
        <SelectRadio
          list={modal?.rateCode?.map((e) => {
            return { key: 'rateCode_' + e.rate_code_seq, title: e.title };
          })}
          name={'connect_code_seq'}
          checked={
            el.connect_code_seq
              ? Object.assign(
                  {},
                  {
                    key: 'rateCode_' + modal.rateCode?.find((e) => 'rateCode_' + e.rate_code_seq === el?.connect_code_seq)?.rate_code_seq,
                    title: modal.rateCode?.find((e) => 'rateCode_' + e.rate_code_seq === el?.connect_code_seq)?.title,
                  }
                )
              : undefined
          }
          onCheck={(name, value) => {
            comCallback(el, idx, name, value);
          }}
        />
      </td>
      <td className="cnd">
        <BaseButton
          buttonLabel={'Del'}
          onButtonClick={() => {
            comCallback(el, idx, 'del', '');
          }}
          className={'bEX'}
        />
      </td>
    </tr>
  );
};

export default AmountAddModal;
