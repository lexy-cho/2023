import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const MyPageTabNav = () => {
  return (
    <>
        <div className='tabNav lCase myTopTab'>
            <nav>
                <ul>
                    <li className='on'><Link to='/mypage'>전체 보기</Link></li>
                    <li><Link to='/order'>나의 쇼핑</Link></li>
                    <li><Link to='/review'>나의 리뷰</Link></li>
                </ul>
            </nav>
        </div>
    </>
  );
};

export default MyPageTabNav;
