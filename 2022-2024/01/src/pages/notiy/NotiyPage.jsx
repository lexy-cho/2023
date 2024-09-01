import React, { useEffect } from 'react';

const NotiyPage = ({onLayoutTitleChange}) => {
  useEffect(() => {
      onLayoutTitleChange('알림');
  });
  return (
    <>
      <section>
        <div className='notiyWrapBack'>
          <div className='notiyWrap'>
            <div className='listTit'>
              <h3>알림</h3>
              <span className='sorting'>
                <span>
                  <input type='radio' id='sorting1' name='sorting1' defaultChecked />
                  <label htmlFor='sorting1'>전체</label>
                </span>
                <span>
                  <input type='radio' id='sorting2' name='sorting1' />
                  <label htmlFor='sorting2'>읽지않음</label>
                </span>
              </span> 
            </div>
            <div className='notiyList'>
              <ul>
                <li className='new'>
                  <strong>공지사항 제목</strong>
                  <p>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</p>
                </li>
                <li className='new'>
                  <strong>공지사항 제목</strong>
                  <p>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</p>
                </li>
                <li>
                < strong>공지사항 제목</strong>
                <p>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</p>
                </li>
                <li>
                  <strong>공지사항 제목</strong>
                  <p>공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.</p>
                </li>
                <li className='noList notiy'>알림이 없습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotiyPage;
