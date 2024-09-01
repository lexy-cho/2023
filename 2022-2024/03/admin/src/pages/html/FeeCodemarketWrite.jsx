import React , {useState, useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import FCMWriteBasic from './FCMWriteBasic';

const FeeCodemarketWrite = () => {

  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();

  return (
    <>
        <section className='viewCase'>
            <div className="subTit">
                <div><em>요금</em><span>요금코드 관리</span><span>마켓 코드</span><span>마켓 카테고리/코드 추가</span></div>
                <h2>마켓 카테고리/코드 추가</h2>
            </div>
            {/* -- */}
            <div className="tabNav" ref={tabRef} >
                <nav>
                    <ul>
                        <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => handleTab(1)}>기본 정보(필수)</button></li>
                    </ul>
                </nav>
            </div>
            {/* -- */}
            {tab === 1 && <FCMWriteBasic />}
        </section>
    </>
    
	
  );
};

export default FeeCodemarketWrite;