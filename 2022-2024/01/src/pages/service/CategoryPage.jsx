import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BaseButton } from '@components/common';
import { Button } from 'react-scroll';

const CategoryPage = ({onLayoutTitleChange}) => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    useEffect(() => {
        onLayoutTitleChange('카테고리');
    });
  return (
    <>
        <section>
            <div className='mobileCategory'>
                <article>
                    <ul>
                        <li className={` ${visible ? 'on' : ''}`}>
                            <BaseButton label='이벤트' onClick={() => setVisible(!visible)} />
                            <ol>
                                <li><Link to='/event'>진행중인 이벤트</Link></li>
                                <li><Link to='/event'>뉴스레터</Link></li>
                            </ol>
                        </li>
                        <li className={` ${visible2 ? 'on' : ''}`}>
                            <BaseButton label='고객센터' onClick={() => setVisible2(!visible2)} />
                            <ol>
                                <li><Link to='/center'>공지사항</Link></li>
                                <li><Link to='/center'>FAQ</Link></li>
                                <li><Link to='/center'>1:1 문의</Link></li>
                            </ol>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    </>
  );
};

export default CategoryPage;
