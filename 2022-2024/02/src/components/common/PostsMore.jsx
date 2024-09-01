import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import BaseButton from './BaseButton';

const PostsMore = ({ items, key, value, className }) => {
  const moreRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [moreRef, setVisible]);

  const handleClick = ({ onClick }) => {
    setVisible(false);
    if (onClick) {
      onClick();
    }
  };

  return (
    <span ref={moreRef} className={`${className} ${visible ? 'on' : ''}`}>
      <em className="bDM" onClick={() => setVisible(!visible)}>
        더보기
      </em>
      <span>
        {items?.map((el, idx) => {
          return <BaseButton key={`${moreRef}_${idx}`} label={el[key]} onClick={() => handleClick({ onClick: el?.onClick })} />;
        })}
      </span>
    </span>
  );
};

PostsMore.displayName = 'PostsMore';

PostsMore.propTypes = {
  items: PropTypes.array,
  key: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};

PostsMore.defaultProps = {
  items: [],
  key: 'name',
  value: 'value',
  className: 'postsMore',
};

export default PostsMore;
