import React, {useState, useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import { DatePicker } from '@components/common';
import SFReserv from './SFReserv';
import SFCoupon from './SFCoupon';
import SFMember from './SFMember';

const SummeryFix = () => {
  const {dpMin, dpMax} = DatePicker();
  
  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();

  return (
    <>
        <section>
            <div className="subTit">
                <div><em>통계</em><span>통계</span><span>정형 통계</span></div>
                <h2>정형 통계</h2>
            </div>
            {/* -- */}
            <div className="tabNav" ref={tabRef} >
                <nav>
                    <ul>
                        <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => handleTab(1)}>예약</button></li>
                        <li className={`${tab === 2 ? 'on' : ''}`}><button onClick={() => handleTab(2)}>쿠폰</button></li>
                        <li className={`${tab === 3 ? 'on' : ''}`}><button onClick={() => handleTab(3)}>회원</button></li>
                    </ul>
                </nav>
            </div>
            {/* -- */}
            {tab === 1 && <SFReserv />}
            {tab === 2 && <SFCoupon />}
            {tab === 3 && <SFMember />}
            {/* -- */}
        </section>
    </>
	
  );
};

export default SummeryFix;