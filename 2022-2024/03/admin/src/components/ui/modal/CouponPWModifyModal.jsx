import React, { useState } from 'react';
import { BaseButton, BaseInput } from '@components/common';
import useCouponModal from './hooks/useCouponModal';
import { SearchInput, InputDate, SearchCheck, DragableTable, DragableItem, ModalFormButton } from '@components/common';
import { maskNumber } from '@utils/StringUtil';
const CouponPWModify = ({ onClose, data, refresh }) => {
  // console.log('CouponPWModify=-> ', data);
  const { view } = useCouponModal({ data, onClose, refresh });
  return (
    <div className="fullPop couponPWModifyPop" id="couponPWModifyPop" style={{ display: 'block' }}>
      <BaseButton className="btnPClose" buttonLabel={'닫기'} onButtonClick={() => onClose()} />

      <h1 className="pt">비밀번호 변경</h1>
      <div className="pBack">
        <div className="tableAddSet">
          <div className="tls editCase scroll">
            <DragableTable
              isModal={true}
              isShiftDrag={false}
              header={view?.headers}
              list={view?.body?.coupon_password_list}
              ItemComponent={DragableItem}
              RowComponent={PasswordItem}
              comCallback={(call) => {
                view?.handleItemUpdate(call);
              }}
            />
            {/* <table>
              <colgroup>
                <col width="72" />
                <col width="40%" />
                <col width="30%" />
                <col width="72" />
              </colgroup>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>호텔 구분</th>
                  <th>비밀번호</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="초기 비밀번호" />
                  </td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="12**" />
                  </td>
                  <td className="cnd">
                    <button className="bEX">Del</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="초기 비밀번호" />
                  </td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="12**" />
                  </td>
                  <td className="cnd">
                    <button className="bEX">Del</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="초기 비밀번호" />
                  </td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="12**" />
                  </td>
                  <td className="cnd">
                    <button className="bEX">Del</button>
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>
          <div className="addSet">
            <div className="before" style={{ display: `${view?.addMode ? 'none' : 'block'}` }}>
              <BaseButton className="bAdd" onButtonClick={() => view?.setAddMode(true)} buttonLabel={'비밀번호 추가'} />
            </div>

            {/* <div className="before" style={{ display: 'none' }}>
              <button className="bAdd">비밀번호 추가</button>
            </div> */}
            {view?.addMode && (
              <div className="after">
                <BaseInput type="text" placeholder="호텔 구분 입력" className="item" onChange={(e) => view?.handleAddUpdate('password_memo', e.target.value)} />
                <BaseInput type="text" placeholder="비밀번호 4자리 입력" className="item" inputType={'num'} maxLength={4} onChange={(e) => view?.handleAddUpdate('password', e.target.value)} />

                <span className="afterBtn item">
                  <BaseButton className="bID" onButtonClick={() => view?.setAddMode(false)} buttonLabel={'Del'} />
                  <BaseButton className="bED" onButtonClick={() => view?.handleAdd()} buttonLabel={'Done'} />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <ModalFormButton isSubmit={null} onCancel={() => onClose()} onSave={() => view?.handleSave()} />

      {/* <div className="pBtn">
        <span className="fr">
          <button className="btnL sm">닫기</button>
          <button className="btnB sm">저장 후 닫기</button>
        </span>
      </div> */}
    </div>
  );
};

export const PasswordItem = ({ ...props }) => {
  const { num, index, el, DragHandler, onMouseDown, onMouseOver, isSelect, comCallback } = props;
  const [change, setChange] = useState({ title: false, pass: false });
  const [masked, setMasked] = useState(true);
  //const display = maskNumber(el.password);
  const handleChangeMode = (name) => {
    setChange((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleBlur = (value) => {
    if (value.length === 4) {
      setMasked(true);
    }
  };

  const handleFocus = () => {
    setMasked(false);
  };

  const displayValue = masked ? maskNumber(el.password) : el.password;

  return (
    <tr>
      <td>{num + 1}</td>
      <td className="mCol">
        <span className="mDim" style={{ display: `${change.title ? 'none' : ''}` }} onClick={() => handleChangeMode('title')}>
          수정하기
        </span>
        <BaseInput type="text" value={el.password_memo} onChange={(e) => comCallback({ type: 'change', key: 'password_memo', index: num, value: e.target.value })} />
      </td>
      <td className="mCol">
        <span className="mDim" style={{ display: `${change.pass ? 'none' : ''}` }} onClick={() => handleChangeMode('pass')}>
          수정하기
        </span>
        <BaseInput
          type="text"
          value={displayValue}
          maxLength={4}
          inputType={'num'}
          onBlur={() => handleBlur(el.password)}
          onFocus={handleFocus}
          onChange={(e) => comCallback({ type: 'change', key: 'password', index: num, value: e.target.value })}
        />
      </td>
      <td className="cnd">
        <BaseButton buttonLabel={'Del'} onButtonClick={(e) => comCallback({ type: 'del', key: '', index: num, value: e })} className={'bEX'} />
      </td>
    </tr>
  );
};

export default CouponPWModify;
