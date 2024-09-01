import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ItemTag, PostsMore, BaseInput } from '@components/common';
import sampleProfile from '@assets/images/sample/sample3.png';

// TODO 이미지 없는 경우 기본이미지 필요
const DentalStudioInfo = ({ title, contents, img, detailUrl, local, skill, onInterest, interest, moreItems }) => {
  const handleImageError = (e) => {
    e.target.src = sampleProfile;
  };
  return (
    <li>
      <span className="profileImg">
        <img src={img || sampleProfile} onError={handleImageError} />
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

      <span className="right">
        <BaseInput type="checkbox" className="likeSet" checked={interest} onChange={onInterest} />
        <PostsMore items={moreItems} />
      </span>
    </li>
  );
};

DentalStudioInfo.displayName = 'DentalStudioInfo';

DentalStudioInfo.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  img: PropTypes.string,
  detailUrl: PropTypes.string,
  local: PropTypes.array,
  skill: PropTypes.array,
  onInterest: PropTypes.func,
  interest: PropTypes.bool,
  moreItems: PropTypes.array,
};

DentalStudioInfo.defaultProps = {
  detailUrl: '/centerView',
  local: [],
  skill: [],
  moreItems: [],
};

export default DentalStudioInfo;
