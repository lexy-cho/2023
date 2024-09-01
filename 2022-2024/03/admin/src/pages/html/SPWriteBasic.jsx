import React, {useState} from 'react';
import { DatePicker } from '@components/common';
import ModifyAlert from '../../components/ui/modal/ModifyAlert';
import {ModalAlertPresent} from '@components/common';

const SPWriteBasic = () => {
    const [isModal3, setIsModal3] = useState(false);
    const {dpMin, dpMax} = DatePicker();

    return (
        <>
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
                                <div className="grid">
                                    <dl>
                                        <dt>패키지 이름 <sup>*</sup></dt>
                                        <dd><input type="text" placeholder="룸 이름 입력" /></dd>
                                    </dl>
                                    <dl>
                                        <dt>패키지 타입 <sup>*</sup></dt>
                                        <dd><input type="text" placeholder="ex)AAA" /></dd>
                                    </dl>
                                </div>
                                <div className="grid case3_1 mt24">
                                    <dl>
                                        <dt>PMS 코드</dt>
                                        <dd><input type="text" placeholder="코드 입력" /></dd>
                                    </dl>
                                    <dl>
                                        <dt>Seq</dt>
                                        <dd><input type="text" placeholder="Seq 입력" /></dd>
                                    </dl>
                                    <dl>
                                        <dt>비고</dt>
                                        <dd><input type="text" placeholder="비고사항" /></dd>
                                    </dl>
                                </div>
                            </div>
                        </article>
                        <article className="lbox">
                            <div className="boxTit"><h3>룸 타입 선택</h3></div>
                            <div className="boxDt">
                                <div className="multiSSet chipCase">
                                    <div className="chipArea">
                                        <em style={{display : 'none'}}>선택하세요</em>
                                        <button>DET</button>
                                        <button>DET</button>
                                        <button>DET</button>
                                        <button>DET</button>
                                        <button>DET</button>
                                        <button>DET</button>
                                    </div>
                                    <div className="selectArea">
                                        <div className="item">
                                            <span className="checkSet">
                                                <input type="checkbox" id="chip01"/>
                                                <label htmlFor="chip01"><span>DET</span><em>DOBULE DELUXE ROOM</em></label>
                                            </span>
                                            <span className="checkSet">
                                                <input type="checkbox" id="chip02"/>
                                                <label htmlFor="chip02"><span>DET</span><em>DOBULE DELUXE ROOM</em></label>
                                            </span>
                                            <span className="checkSet">
                                                <input type="checkbox" id="chip03"/>
                                                <label htmlFor="chip03"><span>DET</span><em>DOBULE DELUXE ROOM</em></label>
                                            </span>
                                        </div>
                                        <div className="bLine">
                                            <button className="btnL">취소</button>
                                            <button className="btnB">적용</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div>
                        <article className="lbox">
                            <div className="boxTit"><h3>노출 기간</h3></div>
                            <div className="boxDt">
                                <div className="grid">
                                    <dl>
                                        <dt>시작 날짜 <sup>*</sup></dt>
                                        <dd>
                                            <input type="text" className="cal" placeholder="2024.01.01" id="datepicker1" onClick={()=>dpMin.show()} />
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>종료 날짜 <sup>*</sup></dt>
                                        <dd>
                                            <input type="text" className="cal" placeholder="2024.01.01" id="datepicker2" onClick={()=>dpMax.show()} />
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div className="bArea">
                <button className="btnL">취소하기</button>
                <button className="btnB"  onClick={() => setIsModal3(true)}>저장하기</button>
            </div>
        </div>
        {isModal3 && (
            <ModalAlertPresent >
                <ModifyAlert onClose={() => setIsModal3(false)}/>
            </ModalAlertPresent>
        )}
        </>
    )
}

export default SPWriteBasic;
