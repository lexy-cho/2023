import React , {useState, useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import sampleImage from '@assets/images/sample1.png'

const ContentsFacilityPWrite = () => {

  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();

  return (
    <>
        <section className='viewCase'>
            <div className="subTit">
                <div><em>콘텐츠</em><span>콘텐츠 관리</span><span>시설</span><span>시설 추가</span></div>
                <h2>시설 추가</h2>
            </div>
            {/* -- */}
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
                                    <dl>
                                        <dt>시설 이름 <sup>*</sup></dt>
                                        <dd><input type="text" placeholder="시설 이름 입력" /></dd>
                                    </dl>
                                    <dl className="mt24">
                                        <dt>상세 설명 <sup>*</sup></dt>
                                        <dd>
                                            <div className="taSet"><textarea placeholder="상세 설명 입력"></textarea><em><i>0</i>/120</em></div>
                                        </dd>
                                    </dl>
                                    <div className="grid mt24">
                                        <dl>
                                            <dt>담당자 연락처</dt>
                                            <dd><input type="text" placeholder="000000" /></dd>
                                        </dl>
                                        <div></div>
                                    </div>
                                </div>
                            </article>
                            <article className="lbox">
                                <div className="boxTit"><h3>기본 정보</h3></div>
                                <div className="boxDt">
                                    <div className="grid">
                                        <dl>
                                            <dt>운영시간</dt>
                                            <dd><input type="text" placeholder="운영시간 입력" /></dd>
                                        </dl>
                                        <dl>
                                            <dt>이용가</dt>
                                            <dd><input type="text" placeholder="이용가 입력" /></dd>
                                        </dl>
                                    </div>
                                    <div className="grid mt24">
                                        <dl>
                                            <dt>위치</dt>
                                            <dd><input type="text" placeholder="위치 입력" /></dd>
                                        </dl>
                                        <dl>
                                            <dt>입장 기준</dt>
                                            <dd><input type="text" placeholder="입장 기준 입력" /></dd>
                                        </dl>
                                    </div>
                                </div>
                            </article>
                            <article className="lbox">
                                <div className="boxTit"><h3>이용수칙</h3></div>
                                <div className="boxDt">
                                    <dl>
                                        <dt>이용수칙 설명</dt>
                                        <dd>
                                            <div className="taSet"><textarea placeholder="이용수칙 설명 입력"></textarea><em><i>0</i>/500</em></div>
                                        </dd>
                                    </dl>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="lbox">
                                <div className="boxTit"><h3>이미지 설정</h3></div>
                                <div className="boxDt">
                                    <dl>
                                        <dt>썸네일 <sup>*</sup></dt>
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
                                        </dd>
                                    </dl>
                                    <dl className="mt24">
                                        <dt>상세 <sup>*</sup></dt>
                                        <dd className="imgSetCol">
                                            <div className="imgSet">
                                                <div className="imgSetBack">
                                                    <span className="imgUpLoad">
                                                        <i>Drag & Drop files</i>
                                                        <button className="btnL sm">파일 선택</button>
                                                    </span>
                                                    <div>
                                                        <span className="imgUpLoadAfter">
                                                            <i>
                                                                <button className="bEV">View</button>
                                                                <button className="bEX">Del</button>
                                                            </i>
                                                            <span><img src={sampleImage}/></span>
                                                        </span>
                                                        <span className="imgUpLoadAfter">
                                                            <i>
                                                                <button className="bEV">View</button>
                                                                <button className="bEX">Del</button>
                                                            </i>
                                                            <span><img src={sampleImage}/></span>
                                                        </span>
                                                        <span className="imgUpLoadAfter">
                                                            <i>
                                                                <button className="bEV">View</button>
                                                                <button className="bEX">Del</button>
                                                            </i>
                                                            <span><img src={sampleImage}/></span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <em>파일 형식 : jpg, png &nbsp;&nbsp; 권장 비율 : 16:9 </em>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </article>
                            <article className="lbox">
                                <div className="boxTit"><h3>이용 안내</h3></div>
                                <div className="boxDt">
                                    <dl>
                                        <dt>이용 안내 <sup>*</sup></dt>
                                        <dd>
                                            <div className="taSet"><textarea placeholder="상세 설명 입력"></textarea><em><i>0</i>/500</em></div>
                                        </dd>
                                    </dl>
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

export default ContentsFacilityPWrite;