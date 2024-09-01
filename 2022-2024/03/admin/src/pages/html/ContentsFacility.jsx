import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation } from '@components/common';
import { DatePicker } from '@components/common';

const ContentsFacility = () => {
  const { dpMin, dpMax } = DatePicker();

  return (
    <>
      <section>
        <div className="subTit">
          <div>
            <em>콘텐츠</em>
            <span>콘텐츠 관리</span>
            <span>시설</span>
          </div>
          <h2>시설</h2>
        </div>
        {/* -- */}
        <fieldset className="topForm">
          <span className="ipSearch">
            <input type="text" placeholder="시설 이름 검색" />
            <button>검색</button>
          </span>
        </fieldset>
        {/* -- */}
        <div className="content">
          <article className="lbox listCase">
            <div className="boxTit">
              <h3>시설 목록</h3>
              <span className="right">
                <button className="btnW ss" disabled>
                  선택 삭제
                </button>
                <button className="bAdd">추가</button>
              </span>
            </div>
            <div className="boxDt">
              <div className="tls">
                <table>
                  <colgroup>
                    <col width="72" />
                    <col width="72" />
                    <col width="72" />
                    <col width="100" />
                    <col width="100" />
                    <col width="*" />
                    <col width="45%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>
                        <span className="checkSet">
                          <input type="checkbox" id="" />
                        </span>
                      </th>
                      <th>번호</th>
                      <th>순서</th>
                      <th>기능</th>
                      <th>노출</th>
                      <th>시설 이름</th>
                      <th>연결된 프로퍼티 시설</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="checkSet">
                          <input type="checkbox" id="" />
                        </span>
                      </td>
                      <td>1</td>
                      <td>
                        <button className="bMove">Move</button>
                      </td>
                      <td>
                        <button className="bEV">View</button>
                        <button className="bEX">Del</button>
                      </td>
                      <td className="active">노출</td>
                      <td>야외 수영장</td>
                      <td>체스터톤스- 본다이 비치 수영장 / 르부르 낙산 - 인피니티 풀</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="checkSet">
                          <input type="checkbox" id="" />
                        </span>
                      </td>
                      <td>2</td>
                      <td>
                        <button className="bMove">Move</button>
                      </td>
                      <td>
                        <button className="bEV">View</button>
                        <button className="bEX">Del</button>
                      </td>
                      <td className="deactive">비노출</td>
                      <td>실내 골프연습장</td>
                      <td>E7 - 실내 골프 / 르부르 낙산 - 골프 필드리</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        </div>
        {/* -- */}
      </section>
    </>
  );
};

export default ContentsFacility;
