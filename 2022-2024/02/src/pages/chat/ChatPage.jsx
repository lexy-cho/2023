import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ChatCenterPage from './ChatCenterPage';
import ChatDesignerPage from './ChatDesignerPage';

const ChatPage = () => {
  //const [chatDetail, setChatDetail] = useState(false);
  const [tab , setTab] = useState(1);
  const handleTab = (tab) => {
    setTab(tab);
  }
  const tabRef = useRef();
  const setChatDetail = () => {
    console.log('버튼클릭 시 자식 state 수정 필요');
  }

  return (
    <>
      <section>
        <h2>채팅</h2>
        <div className='tabNav' ref={tabRef} >
            <nav>
                <ul>
                    <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => {handleTab(1); setChatDetail(false)}}>치과기공소</button></li>
                    <li className={`${tab === 2 ? 'on' : ''}`}><button onClick={() => handleTab(2)}>치자이너</button></li>
                    <li className={`${tab === 3 ? 'on' : ''}`}><button onClick={() => handleTab(3)}>목록없음예시</button></li>
                </ul>
            </nav>
        </div>
        {/* -- */}
        {tab === 1 && <ChatCenterPage />}
        {tab === 2 && <ChatDesignerPage />}
        {tab === 3 && 
          <div className='noList chat'>
            진행중인 채팅목록이 없습니다.
          </div>
        }
      </section>
    </>
  );
};

export default ChatPage;
