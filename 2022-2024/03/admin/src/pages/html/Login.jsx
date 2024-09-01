import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';

const Login = () => {
  return (
    <>
		<div id="loginWrap">
			<div className="back">
				<div className="lgonForm">
					<h1>DOWHAT CRS ADMIN</h1>
					<form>
						<div className="basicIp">
							<label htmlFor="userCode">Hotel Code</label>
							<input type="text" name="" id="userCode" placeholder="호텔 코드 입력"/>
							<label htmlFor="userId">ID</label>
							<input type="text" name="" id="userId"  placeholder="아이디 입력"/>
							<label htmlFor="userPw">Password</label>
							<input type="password" name="" id="userPw"  placeholder="비밀번호 입력"/>
						</div>
						<button type="button" className="btnB">SIGN IN</button>
					</form>
					<p>(주)두왓에서 제공한 로그인 정보로 진입가능합니다. <br/>로그인 정보는 담당자에게 확인해주세요.</p>
				</div>
			</div>
			<div className="loginCopy">본 페이지는 (주)두왓이 제공하는 페이지 입니다.</div>
		</div>
    </>	
  );
};

export default Login;