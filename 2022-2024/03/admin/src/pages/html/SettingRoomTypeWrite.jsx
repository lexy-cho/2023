import React , {useState, useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Pagenation }  from '@components/common';
import SRWriteBasic from './SRWriteBasic';
import SRWriteCharge from './SRWriteCharge';

const SettingRoomTypeWrite = () => {

  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
      setTab(tab);
  }
  const tabRef = useRef();

  return (
    <>
        <section className='viewCase'>
            <div className="subTit">
                <div><em>설정</em><span>상품관리</span><span>롱 타입 설정</span><span>룸 타입 추가</span></div>
                <h2>룸 타입 추가</h2>
            </div>
            {/* -- */}
            <div className="tabNav" ref={tabRef} >
                <nav>
                    <ul>
                        <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => handleTab(1)}>기본 정보(필수)</button></li>
                        <li className={`${tab === 2 ? 'on' : ''}`}><button onClick={() => handleTab(2)} disabled >콘텐츠</button></li>
                        <li className={`${tab === 3 ? 'on' : ''}`}><button onClick={() => handleTab(3)}>요금</button></li>
                        <li className={`${tab === 4 ? 'on' : ''}`}><button onClick={() => handleTab(4)} disabled>인벤토리</button></li>
                        <li className={`${tab === 5 ? 'on' : ''}`}><button onClick={() => handleTab(5)} disabled>업셀링</button></li>
                    </ul>
                </nav>
            </div>
            {/* -- */}
            {tab === 1 && <SRWriteBasic />}
            {tab === 3 && <SRWriteCharge />}
        </section>
    </>


  );
};

export default SettingRoomTypeWrite;
