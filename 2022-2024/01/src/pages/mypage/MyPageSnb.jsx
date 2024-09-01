import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const MyPageSnb = () => {
  return (
    <>
      <nav>
          <div className='myBox'>
            <div className='myName'>
              <div>
                  <span className="profileImg">
                    {/* <img src={sample01} /> */}
                  </span>
                  <span className="nick">
                    <strong>홍길동</strong>
                    일반회원
                  </span>
              </div>
              <span className='point'>
                포인트
                <Link className='bMR' to='/point'>5,000P</Link>
              </span>
            </div>
          </div>
          <div className='myBox mySnb'>
            <strong>쇼핑</strong>
            <ul>
              <li><Link to='/order'>주문/배송 내역</Link></li>
              <li><Link to='/cancel'>취소/환불 내역</Link></li>
              <li><Link to='/wishlist'>찜한 상품</Link></li>
              <li><Link to='/review'>리뷰 관리</Link></li>
            </ul>
            <strong>내 정보 관리</strong>
            <ul>
              <li><Link to='/myInfo'>개인정보 수정</Link></li>
            </ul>
            <strong>서비스 안내</strong>
            <ul>
              <li><Link to='/notiSetting'>알림/마케팅 정보 수신 동의 설정</Link></li>
            </ul>
          </div>
      </nav>
    </>
  );
};

export default MyPageSnb;
