import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ItemTag, PostsMore, Pagenation } from '@components/common';
import DentalStudioInfo from './DentalStudioInfo';

const DentalStudio = ({ className = 'searchList', pagenation = true, items = [], type = 1 }) => {
  return (
    <>
      <div className={className}>
        <ul>
          {items.length === 0 && (type === 1 ? <li className="noList search">검색 결과가 없습니다.</li> : <li className="noList">관심 치과기공소가 없습니다.</li>)}
          {items.map((el, idx) => (
            <DentalStudioInfo key={idx} {...el} />
          ))}
        </ul>
      </div>

      {pagenation && <Pagenation />}
    </>
  );
};

DentalStudio.propTypes = {
  type: PropTypes.oneOf([0, 1]),
};

export default DentalStudio;
