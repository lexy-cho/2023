import React, { useEffect , useRef} from 'react';
import {NavLink , Link} from 'react-router-dom';
import { Element } from 'react-scroll';

const Error = () => {
  return (
    <>
		<div id="errorWrap">
			<div className="back">
				<div className="errorForm">
					존재하지 않는 주소를 입력하셨거나, <br/>
					요청하신 페이지의 주소가 변경, 삭제 되어 찾을 수 없습니다.<br/>
					<a href="/component">홈으로 이동</a>
				</div>
			</div>
		</div>
    </>
  );
};

export default Error;
