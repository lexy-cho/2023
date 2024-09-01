import React from 'react';
import { RadioGroup, InputArea, BaseCheckBox, BasicCalendar } from '@components/common';
import types from '@data/code.json';
import useSeasonCodeAddModal from './hooks/useSeasonCodeAddModal';

const SeasonCodeAdd = ({ onClose, onAdd }) => {
  const { params, handleCheck, handleChange, handleAdd } = useSeasonCodeAddModal({ onClose, onAdd });
  return (
    <div className="fullPop seasonCodeAddPop" id="seasonCodeAddPop" style={{ display: 'block' }}>
      <button className="btnPClose" onClick={() => onClose()}>
        닫기
      </button>
      <h1 className="pt">코드 추가</h1>
      <div className="pBack">
        <div className="scroll">
          {/*  */}
          <article className="lbox">
            <div className="boxTit">
              <h3>기본 정보</h3>
            </div>
            <div className="boxDt">
              <InputArea title={'시즌 코드 이름'} requied type="text" placeholder="아이템 이름 입력" value={params?.title || ''} onChange={(e) => handleChange('title', e.target.value)} />

              {/* <dd className="sNoti red">* 처음 등록 시에만 타입 선택이 가능합니다.</dd> */}
              <RadioGroup
                dlClass={'mt24'}
                title={'요일/날짜 타입 선택'}
                radios={types?.DaynDateType}
                type={'target'}
                onCheck={(e) => handleChange('season_code_type', e)}
                checkValue={params?.season_code_type}
                add={<dd className="sNoti">* 요일/날짜 타입 선택은 처음 등록시 변경가능 가능합니다.</dd>}
              />
            </div>
          </article>
          {/*  */}
          {params.season_code_type === 'DAY' && (
            <article className="lbox">
              <div className="boxTit">
                <h3>요일 타입</h3>
              </div>
              <div className="boxDt">
                <div className="grid">
                  <BasicCalendar title={'시작 날짜'} requied handleItemChange={(name, date) => handleChange(name, date)} name={'start_date'} value={params?.start_date} />
                  <BasicCalendar title={'종료 날짜'} requied handleItemChange={(name, date) => handleChange(name, date)} name={'end_date'} value={params?.end_date} />
                </div>
                <dl className="mt24">
                  <dt>요일</dt>
                  <dd>
                    {/* Mon Tue Wed Thu Fri Sat Sun */}
                    <span className="checkSet">
                      <BaseCheckBox id="Mon" value="Mon" checked={params.day_list.includes('Mon')} onCheckChange={handleCheck} />
                      <label htmlFor="Mon">월</label>
                    </span>
                    <span className="checkSet">
                      <BaseCheckBox id="Tue" value="Tue" checked={params.day_list.includes('Tue')} onCheckChange={handleCheck} />
                      <label htmlFor="Tue">화</label>
                    </span>
                    <span className="checkSet">
                      <BaseCheckBox id="Wed" value="Wed" checked={params.day_list.includes('Wed')} onCheckChange={handleCheck} />
                      <label htmlFor="Wed">수</label>
                    </span>
                    <span className="checkSet">
                      <BaseCheckBox id="Thu" value="Thu" checked={params.day_list.includes('Thu')} onCheckChange={handleCheck} />
                      <label htmlFor="Thu">목</label>
                    </span>
                    <span className="checkSet">
                      <BaseCheckBox id="Fri" value="Fri" checked={params.day_list.includes('Fri')} onCheckChange={handleCheck} />
                      <label htmlFor="Fri">금</label>
                    </span>
                    <span className="checkSet">
                      <BaseCheckBox id="Sat" value="Sat" checked={params.day_list.includes('Sat')} onCheckChange={handleCheck} />
                      <label htmlFor="Sat">토</label>
                    </span>
                    <span className="checkSet">
                      <BaseCheckBox id="Sun" value="Sun" checked={params.day_list.includes('Sun')} onCheckChange={handleCheck} />
                      <label htmlFor="Sun">일</label>
                    </span>
                  </dd>
                </dl>
              </div>
            </article>
          )}
          {/*  */}
          {params.season_code_type === 'DATE' && (
            <article className="lbox">
              <div className="boxTit">
                <h3>날짜 타입 </h3>
              </div>
              <div className="boxDt">
                <div className="grid">
                  <div>
                    <dl className="dateChoice">
                      <dt>날짜 선택</dt>
                      <dd>
                        <div className="month">
                          2024년 1월
                          <span>
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
                              <td className="this">
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
                              <td className="this">
                                <span>17</span>
                              </td>
                              <td>
                                <span>18</span>
                              </td>
                              <td>
                                <span>19</span>
                              </td>
                              <td>
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
                              <td className="this">
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
                      </dd>
                    </dl>
                    <dl className="choiceday mt24">
                      <dt>
                        선택됨
                        <span>
                          <em>5</em>
                          <button>선택 추가</button>
                        </span>
                      </dt>
                      <dd>
                        <div className="thisDay">
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <dl className="choicedDate">
                      <dt>
                        적용 날짜
                        <button>전체 비우기</button>
                      </dt>
                      <dd>
                        <div className="thisDay">
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                          <button>24.01.13</button>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
      <div className="pBtn">
        <span className="fr">
          <button className="btnL sm" onClick={onClose}>
            취소
          </button>
          <button className="btnB sm" onClick={handleAdd}>
            신규 추가
          </button>
        </span>
      </div>
    </div>
  );
};

export default SeasonCodeAdd;
