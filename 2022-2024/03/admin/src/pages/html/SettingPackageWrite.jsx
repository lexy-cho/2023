import React , {useState, useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import SPWriteBasic from './SPWriteBasic';
import SPWriteItem from './SPWriteItem';
import SPWriteCharge from './SPWriteCharge';
import SPWriteInventory from './SPWriteInventory';


const SettingPackageWrite = () => {
  
  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();

  return (
    <>
        <section className='viewCase'>
            <div className="subTit">
                <div><em>설정</em><span>상품관리</span><span>패키지</span><span>패키지 추가</span></div>
                {/* <h2>패키지</h2> */}
                <div className="multiSSet h2Case">
                    <em className="mValue on">패키지</em>
                    <div className="selectArea">
                        <div className="item">
                            <span className="radioSet">
                                <input type="radio" id=""/>
                                <label htmlFor="">First checkbox</label>
                            </span>
                            <span className="radioSet">
                                <input type="" id=""/>
                                <label htmlFor="two2">Second checkbox</label>
                            </span>
                            <span className="radioSet">
                                <input type="radio" id=""/>
                                <label htmlFor="">Third checkbox</label>
                            </span>
                        </div>
                        <div className="bLine">
                            <button className="btnL">취소</button>
                            <button className="btnB">적용</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- */}
            <div className="tabNav" ref={tabRef} >
                <nav>
                    <ul>
                        <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => handleTab(1)}>기본 정보(필수)</button></li>
                        <li className={`${tab === 2 ? 'on' : ''}`}><button onClick={() => handleTab(2)}>아이템/업셀링</button></li>
                        <li className={`${tab === 3 ? 'on' : ''}`}><button onClick={() => handleTab(3)} disabled>콘텐츠</button></li>
                        <li className={`${tab === 4 ? 'on' : ''}`}><button onClick={() => handleTab(4)}>요금</button></li>
                        <li className={`${tab === 5 ? 'on' : ''}`}><button onClick={() => handleTab(5)}>인벤토리</button></li>
                    </ul>
                </nav>
            </div>
            {/* -- */}
            {tab === 1 && <SPWriteBasic />}
            {tab === 2 && <SPWriteItem />}
            {tab === 4 && <SPWriteCharge />}
            {tab === 5 && <SPWriteInventory />}
        </section>
    </>

  );
};

export default SettingPackageWrite;
