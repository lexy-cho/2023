import React, { useEffect, useRef, useState, useCallback } from 'react';
// import sampleProfile from '@assets/images/sample/sample1.jpeg';
import { Pagenation, ItemTag, BaseButton, SortingSelect } from '@components/common';
import { Link } from 'react-router-dom';
import EventIngPage from './EventIngPage';
import EventNewsPage from './EventNewsPage';

const NoticePage = ({onLayoutTitleChange}) => {
    const [tab , setTab] = useState(1);
    const handleTab = (tab) => {
      setTab(tab);
    }
    const tabRef = useRef();
    const produtItems = [{ name: '전체', value: 0 }, { name: '최신순', value: 1 }, { name: '마감임박순', value: 2 }];
    
    useEffect(() => {
      if (tab === 1) {
        onLayoutTitleChange('진행중인 이벤트')
      } else if (tab === 2) {
        onLayoutTitleChange('뉴스레터')
      }
      
    }, [tab])
  return (
    <>
      <section>
        <div className="eventWrap">
            <h2>
                {tab === 1 && '진행중인 이벤트'}
                {tab === 2 && '뉴스레터'}
            </h2>
            <div className='tabNavBack'>
                <div className='tabNav' ref={tabRef} >
                    <nav>
                        <ul>
                            <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => handleTab(1)}>진행중인 이벤트</button></li>
                            <li className={`${tab === 2 ? 'on' : ''}`}><button onClick={() => handleTab(2)}>뉴스레터</button></li>
                        </ul>
                    </nav>
                </div>
                <SortingSelect items={produtItems} placeholder={'전체'} onChange={(e) => console.log(e)} />
            </div>
            {/* -- */}
            {tab === 1 && <EventIngPage />}
            {tab === 2 && <EventNewsPage />}
        </div>
      </section>
    </>
  );
};

export default NoticePage;
