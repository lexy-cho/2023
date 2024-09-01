import React , {useState, useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import sampleImage from '@assets/images/sample1.png'

const ContentsHotel = () => {

  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();

  return (
    <>
        <section className='viewCase'>
            <div className="subTit">
                <div><em>콘텐츠</em><span>콘텐츠 관리</span><span>브랜드 소개</span></div>
                <h2>브랜드 소개</h2>
            </div>
            {/* -- */}
            <div className="langSelect">
                <span><input type="radio" defaultChecked /><label>한국어</label></span>
                <span><input type="radio" /><label>영어</label></span>
                <span><input type="radio" /><label>일본어</label></span>
                <span><input type="radio" /><label>중국어 간체</label></span>
                <span><input type="radio" /><label>중국어 번체</label></span>
                <span><input type="radio" /><label>포르투칼어</label></span>
                <span><input type="radio" /><label>스페인어</label></span>
            </div>
            {/* -- */}
            <div className="contentBack contentsHotel">
                <div className="content scroll">
                    <p className="noti">다국어별로 각각 수정이 필요합니다.</p>
                    {/* -- */}
                    <article className="lbox">
                        <div className="boxTit">
                            <h3>STEP 1. 호텔 소개 작성 <sup>*</sup></h3>
                        </div>
                        <div className="boxDt editorBack">
                            <div className="editor">html편집기 영역</div>
                        </div>
                    </article>
                    {/* -- */}
                    <article className="lbox on">
                        {/* 여닫기 시 on Class 추가 */}
                        <div className="boxTit">
                            <h3>STEP 2. 호텔 서비스 선택 <sup>*</sup></h3>
                        </div>
                        <div className="boxDt">
                            <dl>
                                <dt>호텔 서비스</dt>
                                <dd className="serviceChoice">
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">객실 서비스</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">레스토랑</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">수영장</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">스파</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">피트니스 센터</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">비지니스 센터</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">무료 와이파이</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">주차 시설</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">컨시어지</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">룸 서비스</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">컨시어지</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">룸 서비스</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">컨시어지</label>
                                    </span>
                                    <span className="checkSet">
                                        <input type="checkbox" id="" />
                                        <label htmlFor="">수영장</label>
                                    </span>
                                </dd>
                            </dl>
                        </div>
                    </article>
                </div>
                <div className="bArea">
                    <button className="btnB">저장하기</button>
                </div>
            </div>
            {/* -- */}
        </section>
    </>
    
	
  );
};

export default ContentsHotel;