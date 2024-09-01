import React , {useState, useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import FCSWriteBasic from './FCSWriteBasic';
import SRWriteCharge from './SRWriteCharge';

const FeeCodeSeasonWrite = () => {
  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();

  return (
    <>
        <section className='viewCase'>
            <div className="subTit">
                <div><em>요금</em><span>요금코드</span><span>시즌코드</span><span>시즌 클래스 추가</span></div>
                <h2>시즌 클래스 추가</h2>
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
            {tab === 1 && <FCSWriteBasic />}
            {tab === 2 && <SRWriteCharge />}
        </section>
    </>
	
  );
};

export default FeeCodeSeasonWrite;