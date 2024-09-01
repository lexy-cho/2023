import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Pagenation } from '@components/common';
import DesignerInfo from './DesignerInfo';

const Designer = ({ className, pagenation, items, type, total, perPage, currentPage, onPageChange }) => {
  return (
    <>
      <div className={className}>
        <ul>
          {items.length === 0 && (type === 0 ? <li className="noList search">검색 결과가 없습니다.</li> : <li className="noList">관심 치과기공소가 없습니다.</li>)}
          {items.map((el, idx) => (
            <DesignerInfo key={idx} {...el} />
          ))}
        </ul>
      </div>

      {pagenation && <Pagenation total={total} perPage={perPage} currentPage={currentPage} onPageChange={onPageChange} />}
    </>
  );
};

Designer.displayName = 'Designer';

Designer.propTypes = {
  className: PropTypes.string,
  pagenation: PropTypes.bool,
  items: PropTypes.array,
  type: PropTypes.oneOf([0, 1, 2, 3, 4]),
};

Designer.defaultProps = {
  className: 'searchList',
  pagenation: true,
  items: [],
  type: 1,
};

export default Designer;
