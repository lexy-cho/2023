import React, {useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common';

const SummeryBasic = () => {
  const {dpMin, dpMax} = DatePicker();

  return (
    <>
        <section>
            <div className="subTit">
                <div><em>통계</em><span>통계</span><span>통계</span></div>
                <h2>통계</h2>
            </div>
            {/* -- */}
            <fieldset className="topForm">
                <div className="left">
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
            </fieldset>
            {/* -- */}
            <div className="content summeryBasic">
                <article className="lbox">
                    <div className="boxTit">
                        <h3>매출 현황</h3>
                        <span className="right">
                        </span>
                    </div>
                    <div className="boxDt">
                        <div className="mTab">
                            <span>
                                <button className="on">ADR</button>
                                <button>매출액</button>
                            </span>
                        </div>
                        {/* ADR */}
                        <div>
                            그래프 영역
                        </div>
                        {/* 매출액 */}
                        <div style={{display:'none'}}>
                            그래프 영역
                        </div>
                        {/**/}
                    </div>
                </article>
            </div>
            {/* -- */}
        </section>
    </>
	
  );
};

export default SummeryBasic;