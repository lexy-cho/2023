import React from "react";
import { DatePicker } from '@components/common'

const FCCWriteBasic = () => {
    const {dpMin, dpMax} = DatePicker();
    
    return (
        <div className="contentBack">
            <div className="content scroll">
                <div className="grid">
                    <div>
                        <article className="lbox">
                            <div className="boxTit"><h3>기본 정보</h3></div>
                            <div className="boxDt">
                                <div className="grid case3_2">
                                    <dl>
                                        <dt>회사 코드 이름 <sup>*</sup></dt>
                                        <dd><input type="text" placeholder="카테고리 이름 입력" /></dd>
                                    </dl>
                                    <dl>
                                        <dt>구분 <sup>*</sup></dt>
                                        <dd>
                                            <span className="selectSet">
                                                <select name="" id="" >
                                                    <option defaultValue="">개인</option>
                                                </select>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>수수료 <sup>*</sup></dt>
                                        <dd>
                                            <span className="unit">
                                                <input type="text"/>
                                                <em>%</em>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="grid mt24">
                                    <dl>
                                        <dt>시작 날짜 <sup>*</sup></dt>
                                        <dd>
                                            <input type="text" className="cal" placeholder="2024.01.01" id="datepicker1" onClick={()=>dpMin.show()}/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>종료 날짜 <sup>*</sup></dt>
                                        <dd>
                                            <input type="text" className="cal" placeholder="2024.01.01" id="datepicker2" onClick={()=>dpMax.show()} />
                                        </dd>
                                    </dl>
                                </div>
                                <div className="grid case3_1 mt24">
                                    <dl>
                                        <dt>비밀번호 <sup>*</sup></dt>
                                        <dd>
                                            <span className="ipBtn">
                                                <input type="password" defaultValue="****" disabled />
                                                <button>버튼</button>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>연락처 <sup>*</sup></dt>
                                        <dd><input type="text" placeholder="000-0000-0000" /></dd>
                                    </dl>
                                    <dl>
                                        <dt>계정 <sup>*</sup></dt>
                                        <dd><input type="text" placeholder="dowhat@dowhat.io" /></dd>
                                    </dl>
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
    )
}

export default FCCWriteBasic;