import React , {useState, useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import CMWriteBasic from './CMWriteBasic';
import CMWriteLog from './CMWriteLog';

const CouponMgtWrite = () => {

  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();

  return (
    <>
        <section className='viewCase'>
            <div className="subTit">
                <div><em>쿠폰</em><span>쿠폰 관리</span><span>쿠폰</span><span>쿠폰 추가</span></div>
                <h2>쿠폰 추가</h2>
            </div>
            {/* -- */}
            <div className="tabNav" ref={tabRef} >
                <nav>
                    <ul>
                        <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => handleTab(1)}>기본 정보(필수)</button></li>
                        <li className={`${tab === 2 ? 'on' : ''}`}><button onClick={() => handleTab(2)}>로그</button></li>
                    </ul>
                </nav>
            </div>
            {/* -- */}
            {tab === 1 && <CMWriteBasic />}
            {tab === 2 && <CMWriteLog />}
        </section>
    </>
    
	
  );
};

export default CouponMgtWrite;