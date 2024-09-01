import React , {useState, useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import sampleImage from '@assets/images/sample1.png'

const ContentsRoomWrite = () => {

  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();

  return (
    <>
        <section className='viewCase'>
            <div className="subTit">
                <div><em>콘텐츠</em><span>콘텐츠 관리</span><span>객실</span><span>객실 추가</span></div>
                <h2>SEW</h2>
            </div>
            {/* -- */}
            <div className="contentBack">
                <div className="content scroll">
                    <div className="grid">
                        <div>
                            <article className="lbox">
                                <div className="boxTit"><h3>기본 정보</h3></div>
                                <div className="boxDt">
                                    <div className="grid case3_1">
                                        <dl>
                                            <dt>룸 타입</dt>
                                            <dd><input type="text" defaultValue="SEW" disabled /></dd>
                                        </dl>
                                        <dl>
                                            <dt>뷰 타입</dt>
                                            <dd><input type="text" defaultValue="OCEAN VIEW" disabled /></dd>
                                        </dl>
                                        <dl>
                                            <dt>베드 타입</dt>
                                            <dd><input type="text" defaultValue="Single + Single" disabled /></dd>
                                        </dl>
                                    </div>
                                    <div className="grid case3_1 mt24">
                                        <dl>
                                            <dt>최소 인원</dt>
                                            <dd><input type="text" defaultValue="OCEAN VIEW" disabled /></dd>
                                        </dl>
                                        <dl>
                                            <dt>최대 인원</dt>
                                            <dd><input type="text" defaultValue="OCEAN VIEW" disabled /></dd>
                                        </dl>
                                        <dl>
                                            <dt>펫 룸</dt>
                                            <dd>
                                                <span className="checkSet">
                                                    <input type="checkbox" id="" checked disabled />
                                                    <label htmlFor="">해당</label>
                                                </span>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </article>
                            <article className="lbox">
                                <div className="boxTit"><h3>객실 소개</h3></div>
                                <div className="boxDt">
                                    <dl>
                                        <dt>소개 <sup>*</sup></dt>
                                        <dd>
                                            <div className="taSet"><textarea placeholder="상세 설명 입력"></textarea><em><i>0</i>/120</em></div>
                                        </dd>
                                    </dl>
                                    <div className="grid case3_1 mt24">
                                        <dl>
                                            <dt>전용면적</dt>
                                            <dd><input type="text" placeholder="0" /></dd>
                                        </dl>
                                        <dl>
                                            <dt>분양 면적</dt>
                                            <dd><input type="text" placeholder="0" /></dd>
                                        </dl>
                                        <div></div>
                                    </div>
                                    <dl className="mt24">
                                        <dt>객실 구성</dt>
                                        <dd>
                                            <div className="taSet"><textarea placeholder="상세 설명 입력"></textarea><em><i>0</i>/120</em></div>
                                        </dd>
                                    </dl>
                                    <dl className="mt24">
                                        <dt className="addSetting">
                                            어메니티
                                            <button className="btnW ss">어메니티 설정</button>
                                        </dt>
                                        <dd>
                                            <div className="multiSSet chipCase">
                                                <div className="chipArea">
                                                    <em>선택하세요</em>
                                                    {/* <button>DET</button>
                                                    <button>DET</button>
                                                    <button>DET</button>
                                                    <button>DET</button>
                                                    <button>DET</button>
                                                    <button>DET</button> */}
                                                </div>
                                                <div className="selectArea" style={{display: 'none'}}>
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
                                             <em>파일 형식 : jpg, png &nbsp;&nbsp; 권장 비율 : 16:9</em>
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
                                <div className="boxTit"><h3>환불 규정</h3></div>
                                <div className="boxDt">
                                    <dl>
                                        <dt>환불 규정 선택</dt>
                                        <dd>
                                            <div className="multiSSet">
                                                <em className="mValue on">성수기, 비수기</em>
                                                <div className="selectArea">
                                                    <div className="item">
                                                        <span className="checkSet">
                                                            <input type="checkbox" id=""/>
                                                            <label htmlFor="">First checkbox</label>
                                                        </span>
                                                        <span className="checkSet">
                                                            <input type="checkbox" id=""/>
                                                            <label htmlFor="">Second checkbox</label>
                                                        </span>
                                                        <span className="checkSet">
                                                            <input type="checkbox" id=""/>
                                                            <label htmlFor="">Third checkbox</label>
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

export default ContentsRoomWrite;