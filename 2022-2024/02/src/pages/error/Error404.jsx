import React from 'react';

const Error404 = () => {
  return (
    <div id="errorWrap">
      <div className="back">
        <strong>
          404
          <br />
          PAGE NOT FOUND
        </strong>
        <p>
          해당 페이지는 찾을 수 없는 페이지입니다. <br />
          페이지 주소가 변경, 삭제가 되어 찾을 수 없습니다. <br />
          홈으로 이동해주세요 : )
        </p>
        <a href="" className="btnL">
          홈으로 이동
        </a>
      </div>
    </div>
  );
};

export default Error404;
