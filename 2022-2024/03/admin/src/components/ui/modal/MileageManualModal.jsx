import React, { createContext, useContext } from 'react';
import { Grid } from 'swiper/modules';
import { BaseButton, RadioGroup, InputArea, DragableTable, DragableItem, BaseCheckBox, ModalFormButton, SearchInput } from '@components/common';
import { useMileageModal } from './hooks/useRewardsModal';

export const MileageContext = createContext();

const MileageManual = ({ onClose, onRefresh }) => {
  const { view } = useMileageModal({ onClose, onRefresh });

  return (
    <div className="fullPop mileageManualPop" id="mileageManualPop" style={{ display: 'block' }}>
      <BaseButton onButtonClick={() => onClose()} className={'btnPClose'} />

      <h1 className="pt">수동 지급/회수</h1>
      <div className="pBack">
        {/*  */}
        <article className="lbox">
          <div className="boxTit">
            <h3>STEP 1. 타입 선택</h3>
          </div>
          <div className="boxDt">
            <div className="grid wHalf">
              <RadioGroup
                title={'지급/회수'}
                radios={[
                  { key: 'ADD', title: '지급' },
                  { key: 'RETURN', title: '차감' },
                ]}
                checkValue={view?.body?.mileage_type}
                onCheck={(v) => view?.handleItemChange('mileage_type', v)}
              />
              {/* <dl>
                <dt>지급/회수</dt>
                <dd>
                  <span className="radioSet">
                    <input type="radio" id="" />
                    <label htmlFor="">지급</label>
                  </span>
                  <span className="radioSet">
                    <input type="" id="" />
                    <label htmlFor="">회수</label>
                  </span>
                </dd>
              </dl> */}
              <InputArea title={'포인트'} requied type="text" inputType={'num'} placeholder="0" value={view?.body?.mileage} onChange={(v) => view?.handleItemChange('mileage', v.target.value)} />
              {/* <dl>
                <dt>포인트 *</dt>
                <dd>
                  <input type="text" placeholder="0" />
                </dd>
              </dl> */}
            </div>
          </div>
        </article>
        {/**/}
        <fieldset>
          <SearchInput value={view?.keyword} onHandleSearch={view?.handleSearch} placeholder={'이름, 아이디 검색'} onHandleChange={(e) => view?.setKeyword(e)} />
          {/* <span className="ipSearch">
            <input type="text" placeholder="이름, 아이디 검색" />
            <button>검색</button>
          </span> */}
        </fieldset>
        {/**/}
        <article className="lbox listCase">
          <div className="boxTit">
            <h3>STEP 2. 대상자 선택</h3>
          </div>
          <div className="boxDt scroll">
            <div className="tls">
              <MileageContext.Provider value={view?.selectList}>
                <DragableTable
                  isModal={true}
                  isShiftDrag={false}
                  header={view?.headers}
                  list={view?.userList}
                  ItemComponent={DragableItem}
                  RowComponent={MemberItem}
                  comCallback={view?.handleUserCheck}
                />
              </MileageContext.Provider>
              {/* <table>
                <colgroup>
                  <col width="72" />
                  <col width="12%" />
                  <col width="13%" />
                  <col width="13%" />
                  <col width="18%" />
                  <col width="10%" />
                  <col width="15%" />
                  <col width="18%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>
                      <span className="checkSet">
                        <input type="checkbox" />
                      </span>
                    </th>
                    <th>프로퍼티</th>
                    <th>이름</th>
                    <th>아이디</th>
                    <th>이메일</th>
                    <th>등급</th>
                    <th>전화번호</th>
                    <th>가입일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="checkSet">
                        <input type="checkbox" />
                      </span>
                    </td>
                    <td>르부르 낙산</td>
                    <td>홍길동</td>
                    <td>rlfehd</td>
                    <td>dkjfake@nave.rcom</td>
                    <td>silver</td>
                    <td>010-2432-2333</td>
                    <td>24.02.23 10:32:12</td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
        </article>
        {/*  */}
      </div>
      <ModalFormButton
        isSubmit={view?.isSubmit}
        onCancel={() => {
          onClose();
        }}
        saveTitle={'발송하기'}
        onSave={() => view?.handleSave()}
      />

      {/* <div className="pBtn">
        <span className="fr">
          <button className="btnL sm">취소</button>
          <button className="btnB sm">발송하기</button>
        </span>
      </div> */}
    </div>
  );
};

export const MemberItem = ({ ...props }) => {
  const { el, comCallback } = props;
  const selectList = useContext(MileageContext);
  console.log(selectList);
  return (
    <tr>
      <td>
        <span className="checkSet">
          <BaseCheckBox checked={selectList?.some((e) => e.user_id === el.user_id)} onChange={(e) => comCallback(el, e.target.checked)} />
        </span>
      </td>
      <td>{el.hotel_name}</td>
      <td>
        {el.first_name} {el.last_name}
      </td>
      <td>{el.user_id}</td>
      <td>{el.email}</td>
      <td>{el.title}</td>
      <td>{el.phone}</td>
      <td>{el.reg_date}</td>
    </tr>
  );
};

export default MileageManual;
