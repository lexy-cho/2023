import React from "react";
import { DatePicker } from '@components/common';
import sampleImage from '@assets/images/sample1.png';

const CMWriteBasic = () => {
    const {dpMin, dpMax} = DatePicker();
    
    return (
        <div className="contentBack">
            <div className="content scroll">
                <div className="grid">
                    <div>
                        <article className="lbox">
                            <div className="boxTit"><h3>기본 정보</h3></div>
                            <div className="boxDt">
                                <dl>
                                    <dt>쿠폰 이름 <sup>*</sup></dt>
                                    <dd><input type="text" placeholder="쿠폰 이름 입력" /></dd>
                                </dl>
                                <div className="grid mt24">
                                    <dl>
                                        <dt>상세 설명</dt>
                                        <dd><div className="taSet"><textarea placeholder="상세 설명 입력"></textarea><em><i>0</i>/120</em></div></dd>
                                    </dl>
                                    <dl>
                                        <dt>약관</dt>
                                        <dd><div className="taSet"><textarea placeholder="약관 입력"></textarea><em><i>0</i>/120</em></div></dd>
                                    </dl>
                                </div>
                            </div>
                        </article>
                        <article className="lbox">
                            <div className="boxTit"><h3>쿠폰 상세</h3></div>
                            <div className="boxDt">
                                <div className="grid case2_1">
                                    <dl>
                                        <dt>사용 처리 여부</dt>
                                        <dd>
                                            <span className="radioSet">
                                                <input type="radio" id=""/>
                                                <label htmlFor="">가능</label>
                                            </span>
                                            <span className="radioSet">
                                                <input type="radio" id=""/>
                                                <label htmlFor="">불가능(지류)</label>
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>최소 사용 금액</dt>
                                        <dd>
                                            <span className="radioSet">
                                                <input type="radio" id=""/>
                                                <label htmlFor="">제한 없음</label>
                                            </span>
                                            <span className="radioSet">
                                                <input type="radio" id=""/>
                                                <label htmlFor="">금액 제한</label>
                                            </span>
                                            <span className="unit">
                                                <input type="text"/>
                                                <em>원</em>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                                <dl className="mt24">
                                    <dt>발송 타입</dt>
                                    <dd>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">일반</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">추천인 발송</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">회원가입 발송</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">입회형</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">발급형</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">생일 발송</label>
                                        </span>
                                    </dd>
                                </dl>
                                <dl className="mt24">
                                    <dt>구분</dt>
                                    <dd>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">객실</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">식음</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">부대시설</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">기타</label>
                                        </span>
                                    </dd>
                                </dl>
                                <dl className="mt24">
                                    <dt>혜택</dt>
                                    <dd>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">%할인</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">금액 할인</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">포인트 지급</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">단순표기 (Ex : 객실업그레이드)</label>
                                        </span>
                                    </dd>
                                    <dd><input type="text" placeholder="숫자만 입력" className="w180" /></dd>
                                </dl>
                            </div>
                        </article>
                        <article className="lbox">
                            <div className="boxTit"><h3>사용 상세</h3></div>
                            <div className="boxDt">
                                <dl>
                                    <dt>사용 방법</dt>
                                    <dd>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">즉시 사용(예약 사용 가능)</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">현장 사용(예약 사용 불가능)</label>
                                        </span>
                                    </dd>
                                </dl>
                                <dl className="mt24">
                                    <dt>사용 기간</dt>
                                    <dd>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">무제한</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">기간 설정</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">발급일로부터 n 일까지</label>
                                        </span>
                                    </dd>
                                </dl>
                                <dl className="mt24">
                                    <dt>사용 여부</dt>
                                    <dd>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">가능</label>
                                        </span>
                                        <span className="radioSet">
                                            <input type="radio" id=""/>
                                            <label htmlFor="">불가</label>
                                        </span>
                                    </dd>
                                </dl>
                            </div>
                        </article>
                    </div>
                    <div>
                        <article className="lbox">
                            <div className="boxTit">
                                <h3>활성화 여부</h3>
                                <span className="toggleSet">
                                    <label>활성화</label>
                                    <input type="checkbox" />
                                </span>
                            </div>
                            <div className="boxDt">
                                <div className="grid">
                                    <dl>
                                        <dt>활성화 시점</dt>
                                        <dd>
                                            <span className="radioSet">
                                                <input type="radio" name=""/>
                                                <label htmlFor="">즉시 활성화</label>
                                            </span>
                                            <span className="radioSet">
                                                <input type="radio" name=""/>
                                                <label htmlFor="">예약 활성화</label>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="grid mt24">
                                    <dl>
                                        <dt>예약 날짜/시간</dt>
                                        <dd>
                                            <input type="text" className="cal w180" placeholder="2024.01.01" id="datepicker1" onClick={()=>dpMin.show()}/>
                                            <input type="time" className="w180 ml16" />
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </article>
                        <article className="lbox">
                            <div className="boxTit"><h3>연결</h3></div>
                            <div className="boxDt">
                                <div className="grid">
                                    <dl>
                                        <dt>프로퍼티</dt>
                                        <dd>
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
                                        </dd>
                                    </dl>
                                </div>
                                <div className="grid mt24">
                                    <dl>
                                        <dt>연결 타입</dt>
                                        <dd>
                                            <span className="radioSet">
                                                <input type="radio" name=""/>
                                                <label htmlFor="">적용안함</label>
                                            </span>
                                            <span className="radioSet">
                                                <input type="radio" name=""/>
                                                <label htmlFor="">레이트코드</label>
                                            </span>
                                            <span className="radioSet">
                                                <input type="radio" name=""/>
                                                <label htmlFor="">룸타입</label>
                                            </span>
                                            <span className="radioSet">
                                                <input type="radio" name=""/>
                                                <label htmlFor="">패키지</label>
                                            </span>
                                            <span className="radioSet">
                                                <input type="radio" name=""/>
                                                <label htmlFor="">회사코드</label>
                                            </span>
                                        </dd>
                                        <dd>
                                            <div className="multiSSet w370">
                                                <em className="mValue">선택해주세요</em>
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
                            </div>
                        </article>
                        <article className="lbox">
                            <div className="boxTit"><h3>쿠폰 이미지</h3></div>
                            <div className="boxDt">
                                <div className="imgSetCol">
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
                                            <span><img src={sampleImage}/></span>
                                        </span>
                                    </div>
                                    <em>파일 형식 : jpg, png &nbsp;&nbsp; 권장 비율 : 1:0.24</em>
                                </div>
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
    )
}

export default CMWriteBasic;