import { array } from 'prop-types';
import React, { useState, useEffect } from 'react';

const Pagenation = () => {
  return (
    <div className='paginate'>
      <a className='first dis'>처음</a>
      <a className='prev dis'>이전</a>
      {/* 처음, 이전, 다음, 마지막 버튼이 비활성화 일땐 dis 추가 */}
      <span>
        <input type='text' defaultValue={1} />
        <em>10</em>
      </span>
      <a className='next'>다음</a>
      <a className='last'>마지막</a>
    </div>
  );
};

export default Pagenation;
