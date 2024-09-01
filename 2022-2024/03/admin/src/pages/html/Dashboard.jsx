import React, {useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common';

const Dashboard = () => {
  const {dpMin, dpMax} = DatePicker();

  return (
    <>
        <section className="dashboard">
            <div className="subTit">
                <h2>대시보드</h2>
                <div className="multiSSet">
                    <em className="mValue on">모든 호텔</em>
                    <div className="selectArea">
                        <div className="item">
                            <span className="radioSet">
                                <input type="radio" id="one2"/>
                                <label htmlFor="one2">First checkbox</label>
                            </span>
                        </div>
                        <div className="bLine">
                            <button className="btnL">취소</button>
                            <button className="btnB">적용</button>
                        </div>
                    </div>
                </div>
                <input type="text" className="calA" defaultValue="24.01.01 ~ 24.01.30" id="datepicker1" onClick={()=>dpMin.show()} />
                <button className="btnW sm">필터 초기화</button>
            </div>
            {/* -- */}
            {/* -- */}
            <div className="content">
                <article className="lbox">
                    <div className="boxTit">매출 현황</div>
                    <div className="boxDt">
                        <div className="mTab">
                            <span>
                                <button className="on">ADR</button>
                                <button>매출액</button>
                            </span>
                        </div>
                    </div>
                </article>
                <article className="lbox">
                    <div className="boxTit">카테고리별 판매 현황</div>
                    <div className="boxDt">
                    </div>
                </article>
                <article className="lbox">
                    <div className="boxTit">사용자 활동 로그</div>
                    <div className="boxDt">
                    </div>
                </article>
                <article className="lbox">
                    <div className="boxTit">예약 타입</div>
                    <div className="boxDt">
                    </div>
                </article>
            </div>
            {/* -- */}
        </section>
    </>
  );
};

export default Dashboard;