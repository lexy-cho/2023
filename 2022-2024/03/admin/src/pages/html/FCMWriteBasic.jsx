import React from 'react';
import { DatePicker } from '@components/common';

const FCMWriteBasic = () => {
  const { dpMin, dpMax } = DatePicker();

  return (
    <div className="contentBack">
      <div className="content scroll">
        <div className="grid">
          <div>
            <article className="lbox">
              <div className="boxTit">
                <h3>기본 정보</h3>
              </div>
              <div className="boxDt">
                <dl>
                  <dt>
                    카테고리 이름 <sup>*</sup>
                  </dt>
                  <dd>
                    <input type="text" placeholder="카테고리 이름 입력" />
                  </dd>
                </dl>
              </div>
            </article>
            <article className="lbox">
              <div className="boxTit">
                <h3>마켓 코드</h3>
                <span className="right">
                  <button className="btnW ss" disabled>
                    선택삭제
                  </button>
                </span>
              </div>
              <div className="boxDt">
                <div className="tableAddSet">
                  <div className="tls editCase fcsCodeList scroll">
                    <table>
                      <colgroup>
                        <col width="72" />
                        <col width="30%" />
                        <col width="*" />
                        <col width="72" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <span className="checkSet">
                              <input type="checkbox" />
                            </span>
                          </th>
                          <th>마켓 코드</th>
                          <th>비고</th>
                          <th>삭제</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="cnd">
                            <span className="checkSet">
                              <input type="checkbox" />
                            </span>
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="OTA" />
                            {/* td 내 modify가 있는 경우, span 영역 클릭하여 span을 display:none 해서 데이터 입력 영역 수정할 수 있도록 함 */}
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="-" />
                          </td>
                          <td className="cnd">
                            <button className="bEX">Del</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="cnd">
                            <span className="checkSet">
                              <input type="checkbox" />
                            </span>
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="TAE" />
                          </td>
                          <td className="mCol">
                            <span className="mDim">수정하기</span>
                            <input type="text" defaultValue="-" />
                          </td>
                          <td className="cnd">
                            <button className="bEX">Del</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="addSet marketA">
                    <div className="before">
                      <button className="bAdd">마켓 코드 추가</button>
                    </div>
                    <div className="after" style={{ display: 'none' }}>
                      <input type="text" placeholder="마켓 코드 이름" className="item" />
                      <input type="text" placeholder="비고 이름" className="item" />
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
          <div></div>
        </div>
      </div>
      <div className="bArea">
        <button className="btnL">취소하기</button>
        <button className="btnB">저장하기</button>
      </div>
    </div>
  );
};

export default FCMWriteBasic;
