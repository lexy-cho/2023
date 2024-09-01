import React, { useState } from 'react';
import { useOptionCalendar } from './hooks/useOptionModal';
import SPRoomType from '@pages/settings/product/package/components/SPRoomType';
import { BaseInput, SearchCheck, ModalFormButton, CoCalendarRange } from '@components/common';
import { getWeektoString } from '@utils/DateUtil';
const CalenderMgt = ({ onClose }) => {
  const { view } = useOptionCalendar({ onClose });

  console.log(view?.inventoryList);

  return (
    <div className="fullPop calenderMgtPop" id="calenderMgtPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">캘린더</h1>
      <div className="pBack">
        <fieldset className="topForm">
          <span></span>
          <div className="right">
            <label className="label">옵션 이름</label>
            <SearchCheck
              title={'옵션'}
              list={view?.optionList?.map((e) => {
                return { id: e.option_seq, title: e.title };
              })}
              // onCheck={handleSearch}
              onCheck={(check) => {
                console.log(check);
                view?.setSearchParam((prev) => ({ ...prev, option_seq_list: check.length > 0 ? check?.map((e) => e.id) : [] }));
                //setFilter((prevFilter) => ({ ...prevFilter, location_type: check.length > 0 ? check.map((el) => el.id) : [] }));
              }}
              isAll={false}
              // onChangeCheck={(check) => {
              //   setFilter((prevFilter) => ({ ...prevFilter, location_type: check.length > 0 ? check.map((el) => el.id) : [] }));
              // }}
            />

            <label className="label">기간</label>
            <CoCalendarRange
              onChangeDate={(v1, v2) => {
                view?.setSearchParam((prev) => ({ ...prev, start_date: v1, end_date: v2 }));
              }}
              defaultDate={[view?.searchParam?.start_date, view?.searchParam?.end_date]}
            />
            {/* <input type="text" className="calA" defaultValue="24.01.03 ~24.01.31" placeholder="24.01.03 ~24.01.31" /> */}
          </div>
        </fieldset>
        <div className="optionCalList">
          <div className="tls editCase scroll">
            <table>
              <colgroup>
                <col width="128" />
                {Array.from({ length: view?.headerCnt || 0 }, (_, index) => index + 1).map((e) => {
                  return <col width="72" />;
                })}
              </colgroup>
              <thead>
                <tr>
                  <th rowSpan={3} colSpan={2}>
                    날짜
                  </th>
                  {Object.keys(view?.list).map((e) => {
                    const item = view?.list[e];
                    return <th colSpan={item.option_item_list.length * 3}>{item.title}</th>;
                  })}
                  {/* <th colSpan={6}>층 수</th>
                  <th colSpan={3}>흡연</th> */}
                  {/* <th rowSpan={3}></th> */}
                </tr>

                {/* <tr>
                  <th rowSpan={3} colSpan={2}>
                    날짜
                  </th>
                  <th colSpan={6}>층 수</th>
                  <th colSpan={3}>흡연</th>
                  <th rowSpan={3}></th>
                </tr> */}
                <tr>
                  {Object.keys(view?.list).map((e) => {
                    const item = view?.list[e];
                    return item.option_item_list.map((e2) => {
                      return <th colSpan={3}>{e2.option_item_title}</th>;
                    });
                  })}
                </tr>

                <tr>
                  {Object.keys(view?.list).map((e) => {
                    const item = view?.list[e];
                    return item.option_item_list.map((e2) => {
                      return (
                        <>
                          <th className="allot">Allot</th>
                          <th className="sold">Sold</th>
                          <th className="avail">Avail</th>
                        </>
                      );
                    });
                  })}
                </tr>
              </thead>
              <tbody>
                {Object.keys(view?.inventoryList)?.map((e) => {
                  const date = e;

                  const item = view?.inventoryList[e];
                  const week = getWeektoString(date);

                  return (
                    <tr className={`${week === 'Sun' ? 'sunDay' : week === 'Sat' ? 'satDay' : ''}`}>
                      <td>{date}</td>
                      <td>{week}</td>
                      {item?.map((e2) => {
                        return (
                          <>
                            <CalendarItem el={e2} onChange={view?.handleChangeInventory} />
                          </>
                        );
                      })}
                    </tr>
                  );
                })}
                {/* td 내 modify가 있는 경우, span 영역 클릭하여 span을 display:none 해서 데이터 입력 영역 수정할 수 있도록 함 */}
                {/* <tr>
                  <td>23.12.04</td>
                  <td>Mon</td>
                  <td>100</td>
                  <td>20</td>
                  <td>130</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="50" />
                    
                  </td>
                  <td>20</td>
                  <td>0</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="50" />

                  </td>
                  <td>20</td>
                  <td>0</td>
                  <td></td>
                </tr>
                <tr>
                  <td>23.12.05</td>
                  <td>Tue</td>
                  <td>100</td>
                  <td>30</td>
                  <td>120</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="50" />
                  </td>
                  <td>23</td>
                  <td>27</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="50" />

                  </td>
                  <td>20</td>
                  <td>0</td>
                  <td></td>
                </tr>
                <tr>
                  <td>23.12.06</td>
                  <td>Wed</td>
                  <td>100</td>
                  <td>50</td>
                  <td>100</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="50" />
                  </td>
                  <td>10</td>
                  <td>40</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="50" />

                  </td>
                  <td>20</td>
                  <td>0</td>
                  <td></td>
                </tr>
                <tr>
                  <td>23.12.07</td>
                  <td>Thu</td>
                  <td>100</td>
                  <td>41</td>
                  <td>111</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="40" />
                  </td>
                  <td>20</td>
                  <td>20</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="50" />

                  </td>
                  <td>20</td>
                  <td>0</td>
                  <td></td>
                </tr>
                <tr>
                  <td>23.12.08</td>
                  <td>Fri</td>
                  <td>100</td>
                  <td>23</td>
                  <td>127</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="50" />
                  </td>
                  <td>23</td>
                  <td>27</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="50" />

                  </td>
                  <td>20</td>
                  <td>0</td>
                  <td></td>
                </tr>
                <tr className="satDay">
                  <td>23.12.09</td>
                  <td>Sat</td>
                  <td>100</td>
                  <td>56</td>
                  <td>94</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="40" />
                  </td>
                  <td>10</td>
                  <td>30</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="50" />

                  </td>
                  <td>20</td>
                  <td>0</td>
                  <td></td>
                </tr>
                <tr className="sunDay">
                  <td>23.12.10</td>
                  <td>Sun</td>
                  <td>100</td>
                  <td>78</td>
                  <td>72</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="50" />
                  </td>
                  <td>20</td>
                  <td>30</td>
                  <td className="mCol">
                    <span className="mDim">수정하기</span>
                    <input type="text" defaultValue="50" />

                  </td>
                  <td>20</td>
                  <td>0</td>
                  <td></td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalFormButton isSubmit={view?.isSubmit} onCancel={() => onClose()} onSave={() => view?.handleSave()} />
      {/* <div className="pBtn">
        <span className="fr">
          <button className="btnL sm">취소</button>
          <button className="btnB sm">저장</button>
        </span>
      </div> */}
    </div>
  );
};

export const CalendarItem = ({ ...props }) => {
  const [change, setChange] = useState({ allot: false, sold: false, avail: false });
  const handleChange = (type, flag) => {
    setChange((prev) => ({ ...prev, [type]: flag }));
  };

  const { el, onChange } = props;
  return (
    <>
      <td className="mCol">
        <span className="mDim" onClick={() => handleChange('allot', true)} style={{ display: `${change.allot ? 'none' : ''}` }}>
          수정하기
        </span>
        <BaseInput type="text" value={el.allot_quantity} inputType={'num'} onChange={(e) => onChange(el, 'allot_quantity', e.target.value)} />
      </td>
      <td className="mCol">
        {/* <span className="mDim" onClick={() => handleChange('sold', true)} style={{ display: `${change.sold ? 'none' : ''}` }}>
          수정하기
        </span> */}
        <BaseInput type="text" value={el.sold_quantity} inputType={'num'} readOnly onChange={(e) => onChange(el, 'sold_quantity', e.target.value)} />
      </td>
      <td className="mCol">
        {/* <span className="mDim" onClick={() => handleChange('avail', true)} style={{ display: `${change.avail ? 'none' : ''}` }}>
          수정하기
        </span> */}
        <BaseInput type="text" value={el.avail_quantity} inputType={'num'} readOnly onChange={(e) => onChange(el, 'avail_quantity', e.target.value)} />
      </td>
      {/* <td>{e2.allot_quantity}</td>
        <td>{e2.sold_quantity}</td>
        <td>{e2.avail_quantity}</td> */}
    </>
  );
};
export default CalenderMgt;
