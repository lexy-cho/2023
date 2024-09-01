import React, { useState } from 'react';

const SearchInput = ({ onHandleSearch, onHandleChange, placeholder, ...props }) => {
  const handleKey = (e) => {
    // console.log('eee', e);
    if (e.key === 'Enter') {
      onHandleSearch();
    }
  };

  return (
    <span className="ipSearch">
      <input type="text" placeholder={placeholder} onChange={(e) => onHandleChange(e.target.value)} {...props} onKeyDown={handleKey} />
      <button type="button" onClick={onHandleSearch}>
        검색
      </button>
    </span>
  );
};

export default SearchInput;
