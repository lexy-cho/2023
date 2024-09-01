import React from 'react';
import {NavLink , Link} from 'react-router-dom';

const Footer = () => {

	// const handleLink = (e, link) => {
	// 	e.preventDefault();
		
	// 	if(link === '/' || link === '/propertie') {
	// 	  setIsMain(true);
	// 	} else {
	// 	  setIsMain(false);
	// 	}
	// 	navigate(link);
	// 	headerGnb(false)
	//   }
	

    return (
        <div id="footer">
				<footer>
					<div className="fArea01">
						<div className="fBanner"></div>
						<div className="fnb">
							<dl>
								<dt>Contact Us</dt>
								<dd>
									전화 : 070-123-4567<br/>Email: oooo@hotel.com<br/>Fax: 02-123-4567
								</dd>
							</dl>
							<div>
								<address>217-060 강원도 속초시 엑스포로 109 <span>체스터톤스 호텔앤드레지던스 CEO. 신유섭</span></address>
								<p>사업자등록번호 | 727-81-02266 <span>통신판매신고번호. 제2021-서울강남-05044호</span></p>
							</div>
						</div>
						<div className="fAbout">
							<dl>
								<dt>About Us</dt>
								<dd>
									<span>
										<Link to="/introduce/about">VOC</Link>
										{/* <a href="void();" onClick={(e) => handleLink(e,"/introduce/about")}>VOC</a> */}
									</span>
									<span>
										<Link to="/introduce/about">FAQ</Link>
										{/* <a href="void();" onClick={(e) => handleLink(e,"/introduce/about")}>FAQ</a> */}
									</span>
									<span>
										<Link to="/introduce/about">공지사항</Link>
										{/* <a href="void();" onClick={(e) => handleLink(e,"/introduce/about")}>공지사항</a> */}
									</span>
								</dd>
							</dl>
						</div>
						<div className="fSns">
							<dl>
								<dt>SNS</dt>
								<dd>
									<a href="" className="fScc">kakao channel</a>
									<a href="" className="fSface">Instagram</a>
									<a href="" className="fSins">Facebook</a>
									<a href="" className="fSyou">Youtube</a>
								</dd>
							</dl>
						</div>
					</div>
					<div className="fArea02">
						<div><span><a href="introduce.html">오시는 길</a></span><span><a href="	privacy.html">개인정보처리방침</a></span><span><a href="	privacy.html">영상정보처리기기 운영,관리방침</a></span><span><a href="	privacy.html">이용약관</a></span></div>
						<em>Copyright | dowhat.io</em>
					</div>
				</footer>
			</div>
    )
}

export default Footer;