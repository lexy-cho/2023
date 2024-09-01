import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation } from '@components/common';
import RewardsTermModal from '../../components/ui/modal/RewardsTermModal';
import { ModalPresent } from '@components/common';

const RewardsMgt = () => {
  const [isModal, setIsModal] = useState(true);
  return (
    <>
      <section>
        <div className="subTit">
          <div>
            <em>리워즈</em>
            <span>리워즈</span>
            <span>리워즈 관리</span>
          </div>
          <h2>리워즈 관리</h2>
        </div>
        {/* -- */}
        <fieldset className="topForm">
          <div></div>
          <span>
            <button className="btnW sm" onClick={() => setIsModal(true)}>
              리워즈 유지기간
            </button>
          </span>
        </fieldset>
        {/* -- */}
        <div className="content">
          <article className="lbox listCase">
            <div className="boxTit">
              <h3>리워즈 목록</h3>
              <span className="right">
                <button className="bAdd">추가</button>
              </span>
            </div>
            <div className="boxDt rewardsList">
              <div className="tls">
                <table>
                  <colgroup>
                    <col width="72" />
                    <col width="100" />
                    <col width="10%" />
                    <col width="15%" />
                    <col width="*" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="10%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>순서</th>
                      <th>기능</th>
                      <th>등급</th>
                      <th>조건</th>
                      <th>등급 혜택</th>
                      <th>생성 날짜</th>
                      <th>마지막 변경 날짜</th>
                      <th>총 인원수</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="fixData">
                      <td></td>
                      <td>
                        <button className="bEV">View</button>
                      </td>
                      <td>BASIC</td>
                      <td>-</td>
                      <td>포인트 1%</td>
                      <td>-</td>
                      <td>-</td>
                      <td>546,000</td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bMove">Move</button>
                      </td>
                      <td>
                        <button className="bEV">View</button>
                        <button className="bEX">Del</button>
                      </td>
                      <td>CLASSIC</td>
                      <td>회원가입 완료</td>
                      <td>
                        <p className="ellipsis">포인트 적립 4%</p>
                      </td>
                      <td>24.01.02 10:21</td>
                      <td>24.01.02 10:21</td>
                      <td>546,000</td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bMove">Move</button>
                      </td>
                      <td>
                        <button className="bEV">View</button>
                        <button className="bEX">Del</button>
                      </td>
                      <td>SILVER</td>
                      <td>회원가입 완료</td>
                      <td>
                        <p className="ellipsis">포인트 적립 4% / 10,000 포인트 추가 포인트 적립 4% / 10,000 포인트 추가 </p>
                      </td>
                      <td>24.01.02 10:21</td>
                      <td>24.01.02 10:21</td>
                      <td>546,000</td>
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
        <ModalPresent>
          <RewardsTermModal
            onClose={() => {
              setIsModal(false);
            }}
          />
        </ModalPresent>
      )}
    </>
  );
};

export default RewardsMgt;
