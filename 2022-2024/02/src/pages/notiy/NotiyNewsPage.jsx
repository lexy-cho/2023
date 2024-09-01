import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BaseButton, ItemTag, PostsMore, BaseSelect } from '@components/common';

const ChatCenterPage = ({}) => {
  return (
    <>
        {/* 목록 */}
        <article>
            <div className='listBox'>
                <div className='listTit notiyCase'>
                    <span className='notiySorting newsCase'>
                        <span>
                            <BaseButton label='전체' className='on' />
                            <em><BaseButton label='읽지않음'/></em>
                        </span>
                        <BaseButton label='알림 전체 읽음' className='allRead' />
                    </span>
                </div>
                <div className='notiyList'>
                    <ul>
                        <li className='noList'>
                            알림이 없습니다.
                        </li>
                    </ul>
                </div>
                <BaseButton label='더보기' className='listMore' />
            </div>
        </article>
    </>
  );
};

export default ChatCenterPage;
