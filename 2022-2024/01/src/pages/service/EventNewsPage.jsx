import React, { useEffect, useRef, useState, useCallback } from 'react';
// import sampleProfile from '@assets/images/sample/sample1.jpeg';
import { Pagenation, ItemTag, BaseButton, } from '@components/common';
import { Link } from 'react-router-dom';

const EventNewsPage = () => {
  return (
    <>
        <article>
            <div className="eventNewsls">
                {/* Loop */}
                <dl>
                    <dt>
                        업데이트 내용 공유드립니다.
                        <em>2024.08.08</em>
                    </dt>
                    <dd>
                        <strong>소제목 소제목 소제목 소제목 소제목 소제목 </strong>
                        <p>
                            언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요?<br/>
                            언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요?
                        </p>
                    </dd>
                </dl>
                {/* end Loop */}
                <dl className='on'>
                    <dt>
                        업데이트 내용 공유드립니다.
                        <em>2024.08.08</em>
                    </dt>
                    <dd>
                        <strong>소제목 소제목 소제목 소제목 소제목 소제목 </strong>
                        <p>
                            언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요?<br/>
                            언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요?
                        </p>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        업데이트 내용 공유드립니다.
                        <em>2024.08.08</em>
                    </dt>
                    <dd>
                        <strong>소제목 소제목 소제목 소제목 소제목 소제목 </strong>
                        <p>
                            언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요?<br/>
                            언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요? 언제 배송되는 건가요?
                        </p>
                    </dd>
                </dl>
            </div>
            <Pagenation />
        </article>
    </>
  );
};

export default EventNewsPage;
