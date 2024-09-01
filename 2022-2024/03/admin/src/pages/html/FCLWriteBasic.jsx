import React from "react";
import { DatePicker } from '@components/common'

const FCLWriteBasic = () => {
    const {dpMin, dpMax} = DatePicker();
    
    return (
        <div className="contentBack">
            <div className="content scroll">
                <div className="grid">
                    <div>
                        <article className="lbox">
                            <div className="boxTit"><h3>기본 정보</h3></div>
                            <div className="boxDt">
                                <div className="grid">
                                    <dl>
                                        <dt>레이트 코드 이름 <sup>*</sup></dt>
                                        <dd><input type="text" placeholder="카테고리 이름 입력" /></dd>
                                    </dl>
                                    <dl>
                                        <dt>레이트 카테고리 </dt>
                                        <dd>
                                            <div className="multiSSet">
                                                <em className="mValue" id="btnSelect2">카테고리 선택</em>
                                                <div className="selectArea">
                                                    <div className="item">
                                                        <span className="radioSet">
                                                            <input type="radio" id="one2"/>
                                                            <label htmlFor="one2">First checkbox</label>
                                                        </span>
                                                        <span className="radioSet">
                                                            <input type="radio" id="two2"/>
                                                            <label htmlFor="two2">Second checkbox</label>
                                                        </span>
                                                        <span className="radioSet">
                                                            <input type="radio" id="three2"/>
                                                            <label htmlFor="three2">Third checkbox</label>
                                                        </span>
                                                    </div>
                                                    <div className="bLine">
                                                        <button className="btnL">취소</button>
                                                        <button className="btnB">적용</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="grid mt24">
                                    <dl>
                                        <dt>판매 시작 날짜 <sup>*</sup></dt>
                                        <dd>
                                            <input type="text" className="cal" placeholder="2024.01.01" id="datepicker1" onClick={()=>dpMin.show()}/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>판매 종료 날짜 <sup>*</sup></dt>
                                        <dd>
                                            <input type="text" className="cal" placeholder="2024.01.01" id="datepicker2" onClick={()=>dpMax.show()} />
                                        </dd>
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

export default FCLWriteBasic;