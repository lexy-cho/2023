import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Footerr = () => {
  return (
    <div id="footer">
      <footer>
        <span className="flogo">DENTNER</span>
        <div className="goFBtn">
          <Link to="/service">서비스 소개</Link>
          <Link>이용방법</Link>
          <Link to="/help/notice">공지사항</Link>
          <Link to="/help">FAQ</Link>
          <Link>개인정보처리방침</Link>
          <Link>이용약관</Link>
        </div>
        <address>
          <div>
            <span>주식회사 덴트너</span>
            <span>
              <strong>대표자</strong>남원욱
            </span>
            <span>
              <strong>주소</strong>광주광역시 북구 첨단과기로 123, 창업진흥센터 B동 501-5 (광주과학기술원)
            </span>
          </div>
          <div>
            <span>
              <strong>E-mail</strong>support@dentner.com
            </span>
            <span>
              <strong>사업자등록번호</strong>231-86-02630
            </span>
            <span>
              <strong>통신판매 신고</strong>2024-광주북구-0565
            </span>
          </div>
        </address>
        <p>COPYRIGHT © DENTNER ALL RIGHTS RESERVED.</p>
        <button className="channelTalk">채널톡 문의하기</button>
      </footer>
    </div>
  );
};

export default Footerr;
