import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ItemTag, PostsMore } from '@components/common';

const DentalStudioInfo = ({ title, contents, img, detailUrl = '/centerView', local = [], skill = [], moreItems }) => {
  return (
    <li>
      <span className="profileImg">
        <img src={img} />
      </span>
      <div className="listD">
        <strong>{title}</strong>
        <ItemTag items={local} className={'localTag'} />
        <p>{contents}</p>
        <ItemTag items={skill} className={'itemTag'} />
        <div>
          <Link className="bCG">채팅하기</Link>
          <Link className="bMR" to={detailUrl}>
            더 자세히보기
          </Link>
        </div>
      </div>
      {moreItems && (
        <span className="right">
          <input type="checkbox" className="likeSet" />
          <PostsMore items={moreItems} />
        </span>
      )}
    </li>
  );
};

export default DentalStudioInfo;
