import React , {useState, useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import SOWriteBasic from './SOWriteBasic';
import SOWriteCal from './SOWriteCal';

const SettingOptionWrite = () => {

  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();

  return (
    <>
        <section className='viewCase'>
            <div className="subTit">
                <div><em>설정</em><span>상품관리</span><span>옵션</span><span>옵션 추가</span></div>
                <h2>옵션 추가</h2>
            </div>
            {/* -- */}
            <div className="tabNav" ref={tabRef} >
                <nav>
                    <ul>
                        <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => handleTab(1)}>기본 정보(필수)</button></li>
                        <li className={`${tab === 2 ? 'on' : ''}`}><button onClick={() => handleTab(2)}>캘린더</button></li>
                    </ul>
                </nav>
            </div>
            {/* -- */}
            {tab === 1 && <SOWriteBasic />}
            {tab === 2 && <SOWriteCal />}
        </section>
    </>


  );
};

export default SettingOptionWrite;
