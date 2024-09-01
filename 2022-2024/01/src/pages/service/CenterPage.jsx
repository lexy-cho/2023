import React, {useRef, useState, useEffect } from 'react';
import NoticePage from './NoticePage';
import FaqPage from './FaqPage';
import QnaPage from './QnaPage';

const CenterPage = ({onLayoutTitleChange}) => {
    const [tab , setTab] = useState(1);
    const handleTab = (tab) => {
      setTab(tab);
    }
    const tabRef = useRef();
    useEffect(() => {
      if (tab === 1) {
        onLayoutTitleChange('공지사항')
      } else if (tab === 2) {
        onLayoutTitleChange('FAQ')
      } else if (tab === 3) {
        onLayoutTitleChange('1:1 문의')
      }
    }, [tab]);
    
  return (
    <>
      <section>
        <div className="centerWrap">
            <div className='tabNav lCase'>
                <nav>
                    <ul>
                        <li className={`${tab === 1 ? 'on' : ''}`}><button onClick={() => handleTab(1)}>공지사항</button></li>
                        <li className={`${tab === 2 ? 'on' : ''}`}><button onClick={() => handleTab(2)}>FAQ</button></li>
                        <li className={`${tab === 3 ? 'on' : ''}`}><button onClick={() => handleTab(3)}>1:1 문의</button></li>
                    </ul>
                </nav>
            </div>
            {tab === 1 && <NoticePage />}
            {tab === 2 && <FaqPage />}
            {tab === 3 && <QnaPage />}
        </div>
      </section>
    </>
  );
};

export default CenterPage;
