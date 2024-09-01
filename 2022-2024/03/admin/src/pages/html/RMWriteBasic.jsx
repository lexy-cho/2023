import React from 'react';
import { DatePicker } from '@components/common';

const RMWriteBasic = () => {
  const { dpMin, dpMax } = DatePicker();

  return (
    <div className="contentBack">
      <div className="content">
        <article className="lbox">
          <div className="boxTit">
            <h3>기본 정보</h3>
          </div>
          <div className="boxDt">
            <dl>
              <dt>리워즈 이름</dt>
              <dd>
                <input type="text" placeholder="리워즈 이름 입력" />
              </dd>
            </dl>
          </div>
        </article>
        <div className="grid mt12">
          <div>
            <article className="lbox">
              <div className="boxTit">
                <h3>조건 목록</h3>
                <button className="btnW ss">선택 삭제</button>
              </div>
              <div className="boxDt rCondition">
                <div className="tableAddSet">
                  <div className="tls editCase rewardsSetList scroll">
                    <table>
                      <colgroup>
                        <col width="72" />
                        <col width="*" />
                        <col width="18%" />
                        <col width="18%" />
                        <col width="72" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>순서</th>
                          <th>조건</th>
                          <th>n 설정</th>
                          <th>AND/OR</th>
                          <th>삭제</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="cnd">
                            <button className="bMove">Move</button>
                          </td>
                          <td className="mSel">
                            <span className="mDim">수정하기</span>
                            <div className="multiSSet">
                              <em className="mValue on">회원가입 완료</em>
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
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="2" />
                          </td>
                          <td className="cnd">
                            <span className="andOrSet">
                              <input type="checkbox" id="" defaultChecked />
                              <label htmlFor="">
                                <i>OR</i>
                                <em>AND</em>
                              </label>
                            </span>
                          </td>
                          <td className="cnd">
                            <button className="bEX">Del</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="cnd">
                            <button className="bMove">Move</button>
                          </td>
                          <td className="mSel">
                            <span className="mDim">수정하기</span>
                            <div className="multiSSet">
                              <em className="mValue on">숙박 날짜 n회 이상</em>
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
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="5" />
                          </td>
                          <td className="cnd">
                            <span className="andOrSet">
                              <input type="checkbox" id="" />
                              <label htmlFor="">
                                <i>OR</i>
                                <em>AND</em>
                              </label>
                            </span>
                          </td>
                          <td className="cnd">
                            <button className="bEX">Del</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="cnd">
                            <button className="bMove">Move</button>
                          </td>
                          <td className="mSel">
                            <span className="mDim">수정하기</span>
                            <div className="multiSSet">
                              <em className="mValue on">n 포인트 적립</em>
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
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="1500" />
                          </td>
                          <td className="cnd">
                            <span className="andOrSet">
                              <input type="checkbox" id="" />
                              <label htmlFor="">
                                <i>OR</i>
                                <em>AND</em>
                              </label>
                            </span>
                          </td>
                          <td className="cnd">
                            <button className="bEX">Del</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="addSet long">
                    <div className="before" style={{ display: 'none' }}>
                      <button className="bAdd">조건 추가</button>
                    </div>
                    <div className="after">
                      <div className="multiSSet item">
                        <em className="mValue">조건 선택</em>
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
                      <input type="text" placeholder="n 설정 숫자 입력" className="item" />
                      <span className="selectSet item">
                        <select name="" id="">
                          <option defaultValue="">AND</option>
                          <option defaultValue="">OR</option>
                        </select>
                      </span>
                      <span className="afterBtn item">
                        <button className="bID">Del</button>
                        <button className="bED">Done</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="lbox">
              <div className="boxTit">
                <h3>혜택 목록</h3>
                <button className="btnW ss">선택 삭제</button>
              </div>
              <div className="boxDt rBenefits">
                <div className="tableAddSet">
                  <div className="tls editCase optionAddList scroll">
                    <table>
                      <colgroup>
                        <col width="72" />
                        <col width="*" />
                        <col width="19%" />
                        <col width="18%" />
                        <col width="72" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>순서</th>
                          <th>혜택</th>
                          <th>n 설정</th>
                          <th>이용가능 횟수</th>
                          <th>삭제</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="cnd">
                            <button className="bMove">Move</button>
                          </td>
                          <td className="mSel">
                            <div className="multiSSet">
                              <em className="mValue on">포인트 n % 적립</em>
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
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="0" />
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="999" />
                          </td>
                          <td className="cnd">
                            <button className="bEX">Del</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="cnd">
                            <button className="bMove">Move</button>
                          </td>
                          <td className="mSel">
                            <div className="multiSSet">
                              <em className="mValue on">객실 업그레이드</em>
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
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="5" />
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="5" />
                          </td>
                          <td className="cnd">
                            <button className="bEX">Del</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="cnd">
                            <button className="bMove">Move</button>
                          </td>
                          <td className="mSel">
                            <div className="multiSSet">
                              <em className="mValue on">n 포인트 적립</em>
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
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="5" />
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="5" />
                          </td>
                          <td className="cnd">
                            <button className="bEX">Del</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="addSet optionA">
                    <div className="before" style={{ display: 'none' }}>
                      <button className="bAdd">혜택 추가</button>
                    </div>
                    <div className="after">
                      <div className="multiSSet item">
                        <em className="mValue">혜택 선택</em>
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
                      <input type="text" placeholder="n 설정 숫자 입력" className="item" />
                      <input type="text" placeholder="이용가능 횟수 입력" className="item" />
                      <span className="afterBtn item">
                        <button className="bID">Del</button>
                        <button className="bED">Done</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="bArea">
        <button className="btnL">취소하기</button>
        <button className="btnB">저장하기</button>
      </div>
    </div>
  );
};

export default RMWriteBasic;
