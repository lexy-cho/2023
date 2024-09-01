import React, { forwardRef } from "react";
import WidthLookList from './WidthLookList';

const DetailInfo = forwardRef((props, ref) => {
    return (
      <div className="scrollPS" ref={detailInfoRef => (ref.current[0] = detailInfoRef)}>
        <article>
          <div className="back">
            <div className="editorArea">
              924(가로)*NNNN <br/>상품상세페이지 : 관리자에서 등록
            </div>
          </div>
        </article>
        <WidthLookList />
      </div>
    );
  });

export default DetailInfo;