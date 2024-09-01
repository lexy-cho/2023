import React, { useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import sampleImage from '@assets/images/sample1.png';

const ContentsFacilityWrite = () => {
  const [tab, setTab] = useState(1);
  const handleTab = (tab) => {
    setTab(tab);
  };
  const tabRef = useRef();

  return (
    <>
      <section className="viewCase">
        <div className="subTit">
          <div>
            <em>콘텐츠</em>
            <span>콘텐츠 관리</span>
            <span>시설</span>
            <span>시설 추가</span>
          </div>
          <h2>시설 추가</h2>
        </div>
        {/* -- */}
        <div className="contentBack">
          <div className="content scroll">
            <div className="grid">
              <div>
                <article className="lbox">
                  <div className="boxTit">
                    <h3>기본 정보</h3>
                    <span className="toggleSet">
                      <label>노출</label>
                      <input type="checkbox" />
                    </span>
                  </div>
                  <div className="boxDt">
                    <dl>
                      <dt>
                        시설 이름 <sup>*</sup>
                      </dt>
                      <dd>
                        <input type="text" placeholder="시설 이름 입력" />
                      </dd>
                    </dl>
                  </div>
                </article>
                <article className="lbox">
                  <div className="boxTit">
                    <h3>연결 할 프로퍼티 시설</h3>
                    <button className="btnW ss">선택 삭제</button>
                  </div>
                  <div className="boxDt rCondition">
                    <div className="tableAddSet">
                      <div className="tls editCase cFSetList scroll">
                        <table>
                          <colgroup>
                            <col width="72" />
                            <col width="40%" />
                            <col width="40%" />
                            <col width="72" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>순서</th>
                              <th>프로퍼티</th>
                              <th>시설 이름</th>
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
                                  <em className="mValue on">체스터톤스</em>
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
                              <td className="mSel">
                                <span className="mDim">수정하기</span>
                                <div className="multiSSet">
                                  <em className="mValue on">야외 수영장</em>
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
                                  <em className="mValue on">르부르 낙산</em>
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
                              <td className="mSel">
                                <span className="mDim">수정하기</span>
                                <div className="multiSSet">
                                  <em className="mValue on">인피니티 풀</em>
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
                              <td className="cnd">
                                <button className="bEX">Del</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="addSet long">
                        <div className="before" style={{ display: 'none' }}>
                          <button className="bAdd">시설 추가</button>
                        </div>
                        <div className="after">
                          <div className="multiSSet item">
                            <em className="mValue">프로퍼티 선택</em>
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
                          <div className="multiSSet item">
                            <em className="mValue">시설 선택</em>
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
                    <h3>이미지 설정</h3>
                  </div>
                  <div className="boxDt">
                    <dl>
                      <dt>
                        썸네일 <sup>*</sup>
                      </dt>
                      <dd className="imgSetCol">
                        <div className="imgSetOnly">
                          <span className="imgUpLoad">
                            <i>Drag & Drop files</i>
                            <button className="btnL sm">파일 선택</button>
                          </span>
                          <span className="imgUpLoadAfter">
                            <i>
                              <button className="bEV">View</button>
                              <button className="bEX">Del</button>
                            </i>
                            <span>
                              <img src={sampleImage} />
                            </span>
                          </span>
                        </div>
                        <em>파일 형식 : jpg, png &nbsp;&nbsp; 권장 비율 : 1:1.4 </em>
                      </dd>
                    </dl>
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
        {/* -- */}
      </section>
    </>
  );
};

export default ContentsFacilityWrite;
