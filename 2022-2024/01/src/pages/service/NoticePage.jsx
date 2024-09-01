import React from 'react';
import { Pagenation} from '@components/common';

const NoticePage = () => {
  return (
    <>
        <article>
            <h2>공지사항</h2>
            <div className="noticels">
                {/* Loop */}
                <dl>
                    <dt>
                        업데이트 내용 공유드립니다.
                        <em>2024.08.08</em>
                    </dt>
                    <dd>
                        등록된 상세 내용이 노출됩니다
                    </dd>
                </dl>
                {/* end Loop */}
                <dl className='on'>
                    <dt>
                        업데이트 내용 공유드립니다.
                        <em>2024.08.08</em>
                    </dt>
                    <dd>
                        업데이트 내용 업데이트 내용 업데이트 내용 업데이트 내용 업데이트 내용 업데이트 내용 업데이트 내용 업데이트 내용
                    </dd>
                </dl>
                <dl>
                    <dt>
                        업데이트 내용 공유드립니다.
                        <em>2024.08.08</em>
                    </dt>
                    <dd>
                        등록된 상세 내용이 노출됩니다
                    </dd>
                </dl>
            </div>
            <Pagenation />
        </article>
    </>
  );
};

export default NoticePage;
