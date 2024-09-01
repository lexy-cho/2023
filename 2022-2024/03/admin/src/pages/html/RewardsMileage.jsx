import React, { useState, useEffect, useRef } from 'react';

import { DatePicker } from '@components/common';
import MileageTermModal from '@components/ui/modal/MileageTermModal';
import MileageManualModal from '@components/ui/modal/MileageManualModal';
import { ModalFullPresent } from '@components/common';

const RewardsMileage = () => {
  const [isModal, setIsModal] = useState(false);
  const [isModal2, setIsModal2] = useState(false);
  const { dpMin, dpMax } = DatePicker();
  return (
    <>
      <section>
        <div className="subTit">
          <div>
            <em>리워즈</em>
            <span>리워즈</span>
            <span>마일리지 관리</span>
          </div>
          <h2>마일리지 관리</h2>
        </div>
        {/* -- */}
        <fieldset className="topForm">
          <div className="left">
            <span className="ipSearch">
              <input type="text" placeholder="이름, 아이디 검색" />
              <button>검색</button>
            </span>
            <div className="multiSSet">
              <em className="mValue">구분</em>
              <div className="selectArea">
                <div className="item">
                  <span className="checkSet">
                    <input type="checkbox" id="one" />
                    <label htmlFor="one">First checkbox</label>
                  </span>
                  <span className="checkSet">
                    <input type="checkbox" id="two" />
                    <label htmlFor="two">Second checkbox</label>
                  </span>
                  <span className="checkSet">
                    <input type="checkbox" id="three" />
                    <label htmlFor="three">Third checkbox</label>
                  </span>
                </div>
                <div className="bLine">
                  <button className="btnL">취소</button>
                  <button className="btnB">적용</button>
                </div>
              </div>
            </div>
            <span className="short">
              <input type="text" className="calA" placeholder="날짜" id="datepicker1" onClick={() => dpMin.show()} />
            </span>
            <button className="btnW sm">필터 초기화</button>
          </div>
          <span className="right">
            <button className="btnW sm" onClick={() => setIsModal2(true)}>
              수동 지급/회수
            </button>
            <button className="btnW sm" onClick={() => setIsModal(true)}>
              마일리지 조건
            </button>
            <button className="bExc">엑셀 다운로드</button>
          </span>
        </fieldset>
        {/* -- */}
        <div className="content">
          <article className="lbox listCase">
            <div className="boxTit">
              <h3>마일리지 내역</h3>
              <span className="right">
                <button className="bAdd">추가</button>
              </span>
            </div>
            <div className="boxDt mileageList">
              <div className="tls">
                <table>
                  <colgroup>
                    <col width="12%" />
                    <col width="14%" />
                    <col width="8%" />
                    <col width="12%" />
                    <col width="12%" />
                    <col width="12%" />
                    <col width="12%" />
                    <col width="14%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>이름</th>
                      <th>아이디</th>
                      <th>등급</th>
                      <th>퍼센트</th>
                      <th>포인트</th>
                      <th>예약번호</th>
                      <th>날짜</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="useSts add">지급</td>
                      <td>이예준</td>
                      <td>deriwer</td>
                      <td>CLASSIC</td>
                      <td>3</td>
                      <td>312,312</td>
                      <td>2165465</td>
                      <td>24.01.02 13:23</td>
                    </tr>
                    <tr>
                      <td className="useSts acc">적립</td>
                      <td>이예준</td>
                      <td>deriwer</td>
                      <td>CLASSIC</td>
                      <td>3</td>
                      <td>312,312</td>
                      <td>2165465</td>
                      <td>24.01.02 13:23</td>
                    </tr>
                    <tr>
                      <td className="useSts re">회수</td>
                      <td>이예준</td>
                      <td>deriwer</td>
                      <td>CLASSIC</td>
                      <td>-</td>
                      <td>312,312</td>
                      <td>2165465</td>
                      <td>24.01.02 13:23</td>
                    </tr>
                    <tr>
                      <td className="useSts end">사용</td>
                      <td>이예준</td>
                      <td>deriwer</td>
                      <td>CLASSIC</td>
                      <td>-</td>
                      <td>312,312</td>
                      <td>2165465</td>
                      <td>24.01.02 13:23</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        </div>
        {/* -- */}
      </section>
      {isModal && (
        <ModalFullPresent>
          <MileageTermModal
            onClose={() => {
              setIsModal(false);
            }}
          />
        </ModalFullPresent>
      )}
      {isModal2 && (
        <ModalFullPresent>
          <MileageManualModal
            onClose={() => {
              setIsModal2(false);
            }}
          />
        </ModalFullPresent>
      )}
    </>
  );
};

export default RewardsMileage;
