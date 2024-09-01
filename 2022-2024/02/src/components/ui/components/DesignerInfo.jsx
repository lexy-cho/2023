import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ItemTag, PostsMore, BaseInput } from '@components/common';
import sampleProfile from '@assets/images/sample/sample3.png';
import { withCommas } from '@utils/common';

// TODO 이미지 없는 경우 기본이미지 필요
const DesignerInfo = ({ title, contents, img, reviewAvg, reviewCnt, wonPrice, dollarPrice, types, cads, detailUrl, onInterest, interest, moreItems }) => {
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
        <span className="dRating">
          <span>
            <i>평가</i>
            <em>{reviewAvg}</em>
          </span>
          <span>
            리뷰 수<em>{reviewCnt}개</em>
          </span>
          <span>
            거래 총 금액<em>{withCommas(wonPrice)}원</em>
          </span>
        </span>
        <p>{contents}</p>
        <dl>
          <dt>보철 종류</dt>
          <dd>
            <ItemTag items={types} className="itemTag" />
          </dd>
        </dl>
        <dl>
          <dt>선호 CAD</dt>
          <dd>
            <ItemTag items={cads} className="itemTag" />
          </dd>
        </dl>
        <div>
          <span>
            <Link className="bCG">채팅하기</Link>
            <Link className="btnL sm">1:1 지정 요청하기</Link>
          </span>
          <Link className="bMR" to={`${detailUrl}`}>
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

DesignerInfo.displayName = 'DesignerInfo';

DesignerInfo.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  img: PropTypes.string,
  reviewAvg: PropTypes.number,
  reviewCnt: PropTypes.number,
  wonPrice: PropTypes.number,
  dollarPrice: PropTypes.number,
  detailUrl: PropTypes.string,
  types: PropTypes.array,
  cads: PropTypes.array,
  onInterest: PropTypes.func,
  interest: PropTypes.bool,
  moreItems: PropTypes.array,
};

DesignerInfo.defaultProps = {
  detailUrl: '/designerView',
  reviewAvg: 0,
  reviewCnt: 0,
  wonPrice: 0,
  dollarPrice: 0,
  types: [],
  cads: [],
  moreItems: [],
};

export default DesignerInfo;
