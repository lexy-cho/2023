import React, { useState, useRef } from 'react';

import RMWriteBasic from './RMWriteBasic';
import RMWritehistory from './RMWritehistory';

const RewardsMgtWrite = () => {
  const [tab, setTab] = useState(1);
  const handleTab = (tab) => {
    setTab(tab);
  };
  const tabRef = useRef();

  return (
    <>
      <section className="viewCase">
        <div className="subTit">
          <div>
            <em>리워즈</em>
            <span>리워즈</span>
            <span>리워즈 추가</span>
          </div>
          <h2>리워즈 추가</h2>
        </div>
        {/* -- */}
        <div className="tabNav" ref={tabRef}>
          <nav>
            <ul>
              <li className={`${tab === 1 ? 'on' : ''}`}>
                <button onClick={() => handleTab(1)}>리워즈 설정</button>
              </li>
              <li className={`${tab === 2 ? 'on' : ''}`}>
                <button onClick={() => handleTab(2)}>등급 내역</button>
              </li>
            </ul>
          </nav>
        </div>
        {/* -- */}
        {tab === 1 && <RMWriteBasic />}
        {tab === 2 && <RMWritehistory />}
      </section>
    </>
  );
};

export default RewardsMgtWrite;
