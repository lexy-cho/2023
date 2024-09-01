import React , {useState, useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import sampleImage from '@assets/images/sample1.png';

const SettingHMgtWrite = () => {

  return (
    <>
        <section className='viewCase'>
            <div className="subTit">
                <div><em>설정</em><span>설정</span><span>호텔관리</span><span>호텔 추가</span></div>
                <h2>호텔 추가</h2>
            </div>
            {/* -- */}
            <div className="contentBack">
                <div className="content scroll">
                    <div className="grid">
                        <div>
                            <article className="lbox">
                                <div className="boxTit"><h3>기본 정보</h3></div>
                                <div className="boxDt">
                                    <div className="grid case3">
                                        <dl>
                                            <dt>호텔 코드</dt>
                                            <dd><input type="text" defaultValue="1024" disabled /></dd>
                                        </dl>
                                        <dl>
                                            <dt>호텔명 (한)</dt>
                                            <dd><input type="text" placeholder="호텔명 (한) 입력" /></dd>
                                        </dl>
                                        <dl>
                                            <dt>호텔명 (영)</dt>
                                            <dd><input type="text" placeholder="호텔명 (영) 입력" /></dd>
                                        </dl>
                                    </div>
                                    <dl className='mt24'>
                                        <dt>주소</dt>
                                        <dd><input type="text" placeholder="주소 입력" /></dd>
                                    </dl>
                                    <dl className='mt24'>
                                        <dt>호텔 위도/경도</dt>
                                        <dd>
                                            <span className="ipBtn">
                                                <input type="text" disabled />
                                                <button>지도</button>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                            </article>
                            <article className="lbox">
                                <div className="boxTit"><h3>기본 상세</h3></div>
                                <div className="boxDt">
                                    <div className="grid case3_2">
                                        <dl>
                                            <dt>기본언어 <sup>*</sup></dt>
                                            <dd>
                                                <span className="selectSet">
                                                    <select name="" id="" >
                                                        <option defaultValue="">한국어</option>
                                                        <option defaultValue="">일본어</option>
                                                        <option defaultValue="">중국어 번체</option>
                                                        <option defaultValue="">중국어 간체</option>
                                                        <option defaultValue="">포르투칼어</option>
                                                        <option defaultValue="">스페인어</option>
                                                    </select>
                                                </span>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>체크인 시간</dt>
                                            <dd><input type="time" /></dd>
                                        </dl>
                                        <dl>
                                            <dt>체크아웃 시간</dt>
                                            <dd><input type="time" /></dd>
                                        </dl>
                                    </div>
                                    <div className="grid mt24">
                                        <dl>
                                            <dt>호텔 담당자</dt>
                                            <dd><input type="text" placeholder="호텔 담당자 입력" /></dd>
                                        </dl>
                                        <dl>
                                            <dt>기준은행</dt>
                                            <dd>
                                                <span className="selectSet">
                                                    <select name="" id="" >
                                                        <option defaultValue="">하나은행</option>
                                                        <option defaultValue="">신한은행</option>
                                                    </select>
                                                </span>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="lbox">
                                <div className="boxTit"><h3>호텔 로고 이미지</h3></div>
                                <div className="boxDt">
                                    <dl>
                                        <dt>이미지</dt>
                                        <dd className="imgSetCol">
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
                                        </dd>
                                    </dl>
                                </div>
                            </article>
                            <article className="lbox">
                                <div className="boxTit"><h3>호텔 상세</h3></div>
                                <div className="boxDt">
                                    <div className="grid">
                                        <dl>
                                            <dt>예약실 대표번호</dt>
                                            <dd><input type="text" placeholder="0000000" /></dd>
                                        </dl>
                                        <dl>
                                            <dt>예약실 이메일</dt>
                                            <dd><input type="text" placeholder="dowhat@dowhat.io" /></dd>
                                        </dl>
                                    </div>
                                    <div className="grid mt24">
                                        <dl>
                                            <dt>담당자 연락처</dt>
                                            <dd><input type="text" placeholder="0000000" /></dd>
                                        </dl>
                                        <dl>
                                            <dt>담당자 이메일</dt>
                                            <dd><input type="text" placeholder="dowhat@dowhat.io" /></dd>
                                        </dl>
                                    </div>
                                    <div className="grid mt24">
                                        <dl>
                                            <dt>통신판매신고번호</dt>
                                            <dd><input type="text" placeholder="통신판매신고번호 입력" /></dd>
                                        </dl>
                                        <dl>
                                            <dt>사업자 등록번호</dt>
                                            <dd><input type="text" placeholder="사업자 등록번호 입력" /></dd>
                                        </dl>
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
            {/* -- */}
        </section>
    </>

  );
};

export default SettingHMgtWrite;
