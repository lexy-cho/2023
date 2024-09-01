import React from 'react';
import { useResvAddModal } from './hooks/useResvModal';
import { BaseButton, RadioCheck, CoCalendar, InputArea, RadioGroup } from '@components/common';
import { getters } from '@store/BrandingStore';
const ReserveAdd = ({ onClose }) => {
  const { view } = useResvAddModal({ onClose });

  return (
    <div className="fullPop reserveAddPop" id="reserveAddPop" style={{ display: 'block' }}>
      <BaseButton className="btnPClose" onButtonClick={() => onClose()} buttonLabel={'닫기'} />

      <h1 className="pt">신규 예약</h1>
      <div className="pBack">
        <div className="step">
          <ul>
            <li className={`${view?.step == 1 ? 'on' : ''}`}>
              <span>기본 정보</span>
            </li>
            <li className={`${view?.step == 2 ? 'on' : ''}`}>
              <span>요금 선택</span>
            </li>
            <li className={`${view?.step == 3 ? 'on' : ''}`}>
              <span>예약 확인 및 옵션</span>
            </li>
            <li className={`${view?.step == 4 ? 'on' : ''}`}>
              <span>완료</span>
            </li>
          </ul>
        </div>
        {/* stpe1 */}
        <div className="scroll step1" style={{ display: view?.step == 1 ? '' : 'none' }}>
          <article className="lbox">
            <div className="boxTit">
              <h3>기본 정보</h3>
            </div>
            <div className="boxDt">
              <dl>
                <dt>
                  프로퍼티 <sup>*</sup>
                </dt>
                <dd>
                  <RadioCheck
                    isHeader={true}
                    isSearch={true}
                    title={'프로퍼티 선택'}
                    checked={
                      getters
                        ?.getAllHotelList()
                        ?.filter((e) => e.is_hotel_property === 1)
                        .map((e) => {
                          return { id: e.hotel_seq, title: e.hotel_name, data: e };
                        })[0]
                    }
                    list={getters
                      ?.getAllHotelList()
                      ?.filter((e) => e.is_hotel_property === 1)
                      ?.map((el) => {
                        return { id: el.hotel_seq, title: el.hotel_name };
                      })}
                    onCheck={(check) => {
                      console.log(check.id);

                      view?.handleBodyChange('hotel_seq', check.id);
                    }}
                  />
                  {/* <div className="multiSSet wHalf">
                    <em className="mValue">프로퍼티 선택</em>
                    <div className="selectArea">
                      <strong>프로퍼티 선택</strong>
                      <span className="ipSearch">
                        <input type="text" placeholder="" />
                        <button>검색</button>
                      </span>
                      <div className="item">
                        <span className="radioSet">
                          <input type="radio" id="" />
                          <label htmlFor="">First checkbox</label>
                        </span>
                        <span className="radioSet">
                          <input type="radio" id="" />
                          <label htmlFor="">First checkbox</label>
                        </span>
                        <span className="radioSet">
                          <input type="radio" id="" />
                          <label htmlFor="">First checkbox</label>
                        </span>
                      </div>
                      <div className="bLine">
                        <button className="btnL">취소</button>
                        <button className="btnB">적용</button>
                      </div>
                    </div>
                  </div> */}
                </dd>
              </dl>
            </div>
          </article>
          {/**/}
          <div className="grid mt12">
            <article className="lbox">
              <div className="boxTit">
                <h3>기본 정보</h3>
              </div>
              <div className="boxDt">
                <div className="grid">
                  <dl>
                    <dt>
                      도착 <sup>*</sup>
                    </dt>
                    <dd>
                      {/* <input type="text" className="cal" placeholder="2024.01.01" id="" /> */}
                      <CoCalendar onChangeDate={(v) => view?.handleBodyChange('start_date', check.id)} />
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      출발 <sup>*</sup>
                    </dt>
                    <dd>
                      <CoCalendar onChangeDate={(v) => view?.handleBodyChange('end_date', check.id)} />
                      {/* <input type="text" className="cal" placeholder="2024.01.01" id="" /> */}
                    </dd>
                  </dl>
                </div>
                <div className="grid mt24">
                  <InputArea
                    requied
                    title={'룸 수량'}
                    type="text"
                    inputType={'num'}
                    maxLength={2}
                    placeholder="0"
                    value={view?.body?.room_count || ''}
                    onChange={(e) => view.handleBodyChange('room_count', e.target.value)}
                  />
                  {/* <dl>
                    <dt>
                      룸 수량 <sup>*</sup>
                    </dt>
                    <dd>
                      <input type="text" placeholder="0" />
                    </dd>
                  </dl> */}
                  <InputArea
                    title={'박'}
                    type="text"
                    inputType={'num'}
                    maxLength={2}
                    placeholder="0"
                    readOnly
                    value={view?.body?.day_count || ''}
                    onChange={(e) => view.handleBodyChange('day_count', e.target.value)}
                  />
                  {/* <dl>
                    <dt>박</dt>
                    <dd>
                      <input type="text" placeholder="0" disabled />
                    </dd>
                  </dl> */}
                </div>
                <div className="grid mt24">
                  <InputArea
                    requied
                    title={'어른'}
                    type="text"
                    inputType={'num'}
                    maxLength={2}
                    placeholder="0"
                    value={view?.body?.adult_count || ''}
                    onChange={(e) => view.handleBodyChange('adult_count', e.target.value)}
                  />
                  <InputArea
                    title={'어린이'}
                    type="text"
                    inputType={'num'}
                    maxLength={2}
                    placeholder="0"
                    value={view?.body?.child_count || ''}
                    onChange={(e) => view.handleBodyChange('child_count', e.target.value)}
                  />
                  {/* <dl>
                    <dt>
                      어른 <sup>*</sup>
                    </dt>
                    <dd>
                      <input type="text" placeholder="0" />
                    </dd>
                  </dl>
                  <dl>
                    <dt>어린이</dt>
                    <dd>
                      <input type="text" placeholder="0" />
                    </dd>
                  </dl> */}
                </div>
              </div>
            </article>
            <article className="lbox">
              <div className="month">
                <span>
                  <em>2024년</em>
                  <button>이전</button>
                  <button disabled>다음</button>
                </span>
                <span>
                  <em>3월</em>
                  <button>위</button>
                  <button disabled>아래</button>
                </span>
              </div>
              <table className="day">
                <thead>
                  <tr>
                    <th>월</th>
                    <th>화</th>
                    <th>수</th>
                    <th>목</th>
                    <th>금</th>
                    <th>토</th>
                    <th>일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="past">
                      <span>25</span>
                    </td>
                    <td className="past">
                      <span>26</span>
                    </td>
                    <td className="past">
                      <span>27</span>
                    </td>
                    <td className="past">
                      <span>28</span>
                    </td>
                    <td className="past">
                      <span>29</span>
                    </td>
                    <td className="past">
                      <span>30</span>
                    </td>
                    <td className="past">
                      <span>31</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="past">
                      <span>1</span>
                    </td>
                    <td className="past">
                      <span>2</span>
                    </td>
                    <td className="past">
                      <span>3</span>
                    </td>
                    <td className="past">
                      <span>4</span>
                    </td>
                    <td className="past">
                      <span>5</span>
                    </td>
                    <td className="past">
                      <span>6</span>
                    </td>
                    <td className="past">
                      <span>7</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="past">
                      <span>8</span>
                    </td>
                    <td className="past">
                      <span>9</span>
                    </td>
                    <td className="past">
                      <span>10</span>
                    </td>
                    <td className="past">
                      <span>11</span>
                    </td>
                    <td className="past">
                      <span>12</span>
                    </td>
                    <td>
                      <span>13</span>
                    </td>
                    <td>
                      <span>14</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>15</span>
                    </td>
                    <td>
                      <span>16</span>
                    </td>
                    <td className="start">
                      <span>17</span>
                    </td>
                    <td className="ing">
                      <span>18</span>
                    </td>
                    <td className="ing">
                      <span>19</span>
                    </td>
                    <td className="end">
                      <span>20</span>
                    </td>
                    <td>
                      <span>21</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>22</span>
                    </td>
                    <td>
                      <span>23</span>
                    </td>
                    <td>
                      <span>24</span>
                    </td>
                    <td>
                      <span>25</span>
                    </td>
                    <td>
                      <span>26</span>
                    </td>
                    <td>
                      <span>27</span>
                    </td>
                    <td>
                      <span>28</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>29</span>
                    </td>
                    <td>
                      <span>30</span>
                    </td>
                    <td>
                      <span>31</span>
                    </td>
                    <td>
                      <span></span>
                    </td>
                    <td>
                      <span></span>
                    </td>
                    <td>
                      <span></span>
                    </td>
                    <td>
                      <span></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </article>
          </div>
          {/**/}
          <article className="lbox">
            <div className="boxTit">
              <h3>추가 정보</h3>
            </div>
            <div className="boxDt">
              <RadioGroup
                title={'타입'}
                type={'customer_type'}
                onCheck={(v) => view.handleBodyChange('customer_type', Number(v))}
                checkValue={view?.body?.customer_type}
                radios={[
                  { key: 1, title: '회원' },
                  { key: 0, title: '비회원' },
                ]}
              />

              {/* <dl>
                <dt>타입</dt>
                <dd>
                  <span className="radioSet">
                    <input type="radio" name="radio1" />
                    <label htmlFor="">회원</label>
                  </span>
                  <span className="radioSet">
                    <input type="radio" name="radio1" defaultChecked />
                    <label htmlFor="">비회원</label>
                  </span>
                </dd>
              </dl> */}
              <div className="grid mt24">
                <InputArea requied title={'고객이름'} type="text" placeholder="고객이름 입력" value={view?.body?.name || ''} onChange={(e) => view.handleBodyChange('name', e.target.value)} />
                {/* <dl>
                  <dt>
                    고객이름 <sup>*</sup>
                  </dt>
                  <dd>
                    <input type="text" placeholder="0" />
                  </dd>
                </dl> */}
                {view?.body?.customer_type == 1 && (
                  <InputArea
                    requied
                    title={'회원번호'}
                    type="text"
                    placeholder="회원번호 입력"
                    value={view?.body?.customer_num || ''}
                    onChange={(e) => view.handleBodyChange('customer_num', e.target.value)}
                  />
                )}
              </div>
              <div className="grid mt24">
                <InputArea
                  requied
                  title={'휴대폰 번호'}
                  type="text"
                  inputType={'num'}
                  placeholder="휴대폰 번호 입력"
                  value={view?.body?.phone || ''}
                  onChange={(e) => view.handleBodyChange('phone', e.target.value)}
                />

                {/* <dl>
                  <dt>휴대폰 번호</dt>
                  <dd>
                    <input type="text" placeholder="0" />
                  </dd>
                </dl> */}
                <dl>
                  <dt>회원 등급</dt>
                  <dd>
                    <RadioCheck
                      isHeader={true}
                      isSearch={true}
                      title={'회원 등급 선택'}
                      checked={
                        getters
                          ?.getAllHotelList()
                          ?.filter((e) => e.is_hotel_property === 1)
                          .map((e) => {
                            return { id: e.hotel_seq, title: e.hotel_name, data: e };
                          })[0]
                      }
                      list={getters
                        ?.getAllHotelList()
                        ?.filter((e) => e.is_hotel_property === 1)
                        ?.map((el) => {
                          return { id: el.hotel_seq, title: el.hotel_name };
                        })}
                      onCheck={(check) => {
                        console.log(check.id);

                        view?.handleBodyChange('hotel_seq', check.id);
                      }}
                    />
                    {/* <div className="multiSSet">
                      <em className="mValue">회원 등급 선택</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div> */}
                  </dd>
                </dl>
              </div>
              <div className="grid mt24">
                <dl>
                  <dt>성별</dt>
                  <dd>
                    <RadioCheck
                      isHeader={true}
                      isSearch={true}
                      title={'성별 선택'}
                      checked={
                        [
                          { id: 1, title: '남' },
                          { id: 2, title: '여' },
                        ][0]
                      }
                      list={[
                        { id: 1, title: '남' },
                        { id: 2, title: '여' },
                      ]}
                      onCheck={(check) => {
                        console.log(check.id);

                        view?.handleBodyChange('sex', check.id);
                      }}
                    />
                    {/* <div className="multiSSet">
                      <em className="mValue">성별 선택</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div> */}
                  </dd>
                </dl>
                <div></div>
              </div>
            </div>
          </article>
        </div>
        {/* stpe2 */}
        <div className="step2" style={{ display: view?.step == 2 ? '' : 'none' }}>
          <article className="lbox">
            <div className="boxTit">
              <h3>기본 정보 확인</h3>
            </div>
            <div className="boxDt">
              <div className="grid case3">
                <dl>
                  <dt>
                    도착 <sup>*</sup>
                  </dt>
                  <dd>
                    <input type="text" className="cal" placeholder="2024.01.01" id="" />
                  </dd>
                </dl>
                <dl>
                  <dt>
                    출발 <sup>*</sup>
                  </dt>
                  <dd>
                    <input type="text" className="cal" placeholder="2024.01.01" id="" />
                  </dd>
                </dl>
                <dl>
                  <dt>박</dt>
                  <dd>
                    <input type="text" placeholder="0" disabled />
                  </dd>
                </dl>
              </div>
              <div className="grid case3 mt24">
                <dl>
                  <dt>
                    룸 수량 <sup>*</sup>
                  </dt>
                  <dd>
                    <input type="text" placeholder="0" />
                  </dd>
                </dl>
                <dl>
                  <dt>
                    어른 <sup>*</sup>
                  </dt>
                  <dd>
                    <input type="text" placeholder="0" />
                  </dd>
                </dl>
                <dl>
                  <dt>어린이</dt>
                  <dd>
                    <input type="text" placeholder="0" />
                  </dd>
                </dl>
              </div>
            </div>
          </article>
          {/**/}
          <fieldset>
            <div className="multiSSet">
              <em className="mValue on">Room Only</em>
              <div className="selectArea">
                <div className="item">
                  <span className="checkSet">
                    <input type="checkbox" id="" />
                    <label htmlFor="one">First checkbox</label>
                  </span>
                </div>
                <div className="bLine">
                  <button className="btnL">취소</button>
                  <button className="btnB">적용</button>
                </div>
              </div>
            </div>
            <div className="multiSSet">
              <em className="mValue on">Pms</em>
              <div className="selectArea">
                <div className="item">
                  <span className="checkSet">
                    <input type="checkbox" id="" />
                    <label htmlFor="">First checkbox</label>
                  </span>
                </div>
                <div className="bLine">
                  <button className="btnL">취소</button>
                  <button className="btnB">적용</button>
                </div>
              </div>
            </div>
            <div className="multiSSet">
              <em className="mValue on">Walkin</em>
              <div className="selectArea">
                <div className="item">
                  <span className="checkSet">
                    <input type="checkbox" id="" />
                    <label htmlFor="">First checkbox</label>
                  </span>
                </div>
                <div className="bLine">
                  <button className="btnL">취소</button>
                  <button className="btnB">적용</button>
                </div>
              </div>
            </div>
          </fieldset>
          <article className="lbox selectPrice">
            <div className="tlsTit">
              <table>
                <thead>
                  <tr>
                    <th>
                      <span className="selectSet">
                        <select name="" id="">
                          <option defaultValue="">룸 타입</option>
                        </select>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                                        <th>인벤토리</th>
                                    </tr>
                                    <tr>
                                        <td>BAR</td>
                                    </tr>
                                    <tr>
                                        <td>BAR</td>
                                    </tr>
                                    <tr>
                                        <td>BAR</td>
                                    </tr> */}
                  <tr>
                    <td className="noChoice">
                      인벤토리/ <br />
                      레이트 코드
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="tls editCase">
              <table>
                <colgroup>
                  <col width="100" />
                  <col width="100" />
                  <col width="100" />
                  <col width="100" />
                  <col width="100" />
                  <col width="100" />
                  <col width="100" />
                </colgroup>
                <thead>
                  <tr>
                    <th>TK</th>
                    <th>TD</th>
                    <th>TK</th>
                    <th>TSUK</th>
                    <th>TK</th>
                    <th>TK</th>
                    <th>TK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colSpan={7} className="noChoice">
                      상품을 먼저 선택해 주세요.
                    </th>
                  </tr>
                  {/* <tr>
                                        <th>0</th>
                                        <th>32</th>
                                        <th>445</th>
                                        <th>0</th>
                                        <th>32</th>
                                        <th>32</th>
                                        <th>32</th>
                                    </tr>
                                    <tr>
                                        <td>153,000</td>
                                        <td className="bCol">
                                            <span className="mDim">선택</span>
                                            <em>153,000</em>
                                        </td>
                                        <td className="bCol select">
                                            <span className="mDim">선택</span>
                                            <em>153,000</em>
                                        </td>
                                        <td>153,000</td>
                                        <td className="bCol">
                                            <span className="mDim">선택</span>
                                            <em>153,000</em>
                                        </td>
                                        <td className="bCol">
                                            <span className="mDim">선택</span>
                                            <em>153,000</em>
                                        </td>
                                        <td>153,000</td>
                                    </tr>
                                    <tr>
                                        <td>153,000</td>
                                        <td className="bCol">
                                            <span className="mDim">선택</span>
                                            <em>153,000</em>
                                        </td>
                                        <td className="bCol select">
                                            <span className="mDim">선택</span>
                                            <em>153,000</em>
                                        </td>
                                        <td>153,000</td>
                                        <td className="bCol">
                                            <span className="mDim">선택</span>
                                            <em>153,000</em>
                                        </td>
                                        <td className="bCol">
                                            <span className="mDim">선택</span>
                                            <em>153,000</em>
                                        </td>
                                        <td>153,000</td>
                                    </tr>
                                    <tr>
                                        <td>153,000</td>
                                        <td className="bCol">
                                            <span className="mDim">선택</span>
                                            <em>153,000</em>
                                        </td>
                                        <td className="bCol select">
                                            <span className="mDim">선택</span>
                                            <em>153,000</em>
                                        </td>
                                        <td>153,000</td>
                                        <td className="bCol">
                                            <span className="mDim">선택</span>
                                            <em>153,000</em>
                                        </td>
                                        <td className="bCol">
                                            <span className="mDim">선택</span>
                                            <em>153,000</em>
                                        </td>
                                        <td>153,000</td>
                                    </tr> */}
                </tbody>
              </table>
            </div>
          </article>
        </div>
        {/* stpe3 */}
        <div className="scroll step3" style={{ display: view?.step == 3 ? '' : 'none' }}>
          <article className="lbox">
            <div className="boxTit">
              <h3>기본 정보</h3>
            </div>
            <div className="boxDt">
              <dl>
                <dt>타입</dt>
                <dd>
                  <span className="radioSet">
                    <input type="radio" name="radio1" />
                    <label htmlFor="">회원</label>
                  </span>
                  <span className="radioSet">
                    <input type="radio" name="radio1" defaultChecked />
                    <label htmlFor="">비회원</label>
                  </span>
                </dd>
              </dl>
              <div className="grid mt24">
                <dl>
                  <dt>
                    고객이름 <sup>*</sup>
                  </dt>
                  <dd>
                    <input type="text" placeholder="0" />
                  </dd>
                </dl>
                <dl>
                  <dt>
                    회원번호 <sup>*</sup>
                  </dt>
                  <dd>
                    <input type="text" placeholder="0" />
                  </dd>
                </dl>
              </div>
              <div className="grid mt24">
                <dl>
                  <dt>휴대폰 번호</dt>
                  <dd>
                    <input type="text" placeholder="0" />
                  </dd>
                </dl>
                <dl>
                  <dt>회원 등급</dt>
                  <dd>
                    <div className="multiSSet">
                      <em className="mValue">회원 등급 선택</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
              <dl className="mt24">
                <dt>
                  프로퍼티 <sup>*</sup>
                </dt>
                <dd>
                  <div className="multiSSet wHalf">
                    <em className="mValue">프로퍼티 선택</em>
                    <div className="selectArea">
                      <strong>프로퍼티 선택</strong>
                      <span className="ipSearch">
                        <input type="text" placeholder="" />
                        <button>검색</button>
                      </span>
                      <div className="item">
                        <span className="radioSet">
                          <input type="radio" id="" />
                          <label htmlFor="">First checkbox</label>
                        </span>
                        <span className="radioSet">
                          <input type="radio" id="" />
                          <label htmlFor="">First checkbox</label>
                        </span>
                        <span className="radioSet">
                          <input type="radio" id="" />
                          <label htmlFor="">First checkbox</label>
                        </span>
                      </div>
                      <div className="bLine">
                        <button className="btnL">취소</button>
                        <button className="btnB">적용</button>
                      </div>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </article>
          {/**/}
          <article className="lbox">
            <div className="boxTit">
              <h3>예약 상세</h3>
            </div>
            <div className="boxDt">
              <div className="grid case3">
                <dl>
                  <dt>
                    도착 <sup>*</sup>
                  </dt>
                  <dd>
                    <input type="text" className="cal" placeholder="2024.01.01" id="" />
                  </dd>
                </dl>
                <dl>
                  <dt>
                    출발 <sup>*</sup>
                  </dt>
                  <dd>
                    <input type="text" className="cal" placeholder="2024.01.01" id="" />
                  </dd>
                </dl>
                <dl>
                  <dt>박</dt>
                  <dd>
                    <input type="text" placeholder="0" disabled />
                  </dd>
                </dl>
              </div>
              <div className="grid case3 mt24">
                <dl>
                  <dt>
                    룸 수량 <sup>*</sup>
                  </dt>
                  <dd>
                    <input type="text" placeholder="0" />
                  </dd>
                </dl>
                <dl>
                  <dt>
                    어른 <sup>*</sup>
                  </dt>
                  <dd>
                    <input type="text" placeholder="0" />
                  </dd>
                </dl>
                <dl>
                  <dt>어린이</dt>
                  <dd>
                    <input type="text" placeholder="0" />
                  </dd>
                </dl>
              </div>
              <div className="grid case4 mt24 lineTop">
                <dl>
                  <dt>상품 및 경로</dt>
                  <dd>
                    <div className="multiSSet">
                      <em className="mValue on">선택완료</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt>룸타입</dt>
                  <dd>
                    <div className="multiSSet">
                      <em className="mValue on">ATE</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt>뷰타입</dt>
                  <dd>
                    <div className="multiSSet">
                      <em className="mValue on">OCEAN VIEW</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt>베드타입</dt>
                  <dd>
                    <div className="multiSSet">
                      <em className="mValue on">TWIN</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
              <div className="grid case4 mt24">
                <dl>
                  <dt>레이트 코드</dt>
                  <dd>
                    <div className="multiSSet">
                      <em className="mValue on">EIRWW</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt>레이트 요금</dt>
                  <dd>
                    <input type="text" defaultValue="343,000" />
                  </dd>
                </dl>
                <dl>
                  <dt>마켓코드</dt>
                  <dd>
                    <div className="multiSSet">
                      <em className="mValue">선택해주세요</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt>소스 코드</dt>
                  <dd>
                    <div className="multiSSet">
                      <em className="mValue">선택해주세요</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
              <dl className="mt24">
                <dt>레이트 요금</dt>
                <dd>
                  <input type="text" placeholder="Deposit에 따른 금액 입력" className="wHalf" />
                </dd>
              </dl>
            </div>
          </article>
          {/**/}
          <article className="lbox">
            <div className="boxTit">
              <h3>업셀링</h3>
            </div>
            <div className="boxDt">
              <div className="grid">
                <dl>
                  <dt>아이템</dt>
                  <dd>
                    <div className="multiSSet">
                      <em className="mValue">아이템 선택</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt>옵션</dt>
                  <dd>
                    <div className="multiSSet">
                      <em className="mValue">옵션 선택</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
              <div className="grid mt24 couponSet">
                <dl>
                  <dt>
                    쿠폰
                    <button>추가</button>
                  </dt>
                  <dd>
                    <div className="multiSSet">
                      <em className="mValue on">신규 회원 쿠폰</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div>
                  </dd>
                  <dd className="mt8">
                    <input type="text" defaultValue="100,000원" disabled />
                  </dd>
                </dl>
                <dl>
                  <dt>
                    &nbsp;<button>지우기</button>
                  </dt>
                  <dd>
                    <div className="multiSSet">
                      <em className="mValue">쿠폰 선택</em>
                      <div className="selectArea">
                        <div className="item">
                          <span className="radioSet">
                            <input type="radio" id="" />
                            <label htmlFor="">First checkbox</label>
                          </span>
                        </div>
                        <div className="bLine">
                          <button className="btnL">취소</button>
                          <button className="btnB">적용</button>
                        </div>
                      </div>
                    </div>
                  </dd>
                  <dd className="mt8">
                    <input type="text" defaultValue="-" disabled />
                  </dd>
                </dl>
              </div>
              <dl className="mt24">
                <dt>메모</dt>
                <dd>
                  <input type="text" placeholder="메모 입력" />
                </dd>
              </dl>
            </div>
          </article>
        </div>
      </div>
      <div className="pBtn">
        <span className="fr">
          <button className="btnL sm">취소</button>
          <BaseButton className="btnL sm" onButtonClick={() => onClose()} buttonLabel={'취소'} />
          <BaseButton className="btnB sm" onButtonClick={() => view?.handleNext()} disabled={view?.next} buttonLabel={'다음'} />
          {view?.step == 3 && <BaseButton className="btnB sm" onButtonClick={() => view?.handleSave()} buttonLabel={'예약 등록'} />}
        </span>
      </div>
    </div>
  );
};

export default ReserveAdd;
