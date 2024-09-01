import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const CADViewPage  = () => {
  return (
    <>
        <section>
            <h2>CAD파일 수령하기</h2>
            <div className='viewBox'>
                <div className='tvs'>
                    <article>
                        <h3 className='pt0'>첨부파일</h3>
                        <div className='cadDownload'>
                            <ul>
                                <li>
                                    <div className='reQMinInfo'>
                                        <div className='left'>
                                            <span className='itemTag br4'><em>의뢰서 a</em></span>
                                            <strong>@8321430183048173057</strong>
                                            <p>크라운 15 / 어비트먼트 10</p>
                                        </div>
                                        <div className='right'>
                                            <strong className='time'>2024. 06. 30 <strong>18:30</strong></strong>
                                            <Link className='bMR' to='/requestView'>더 자세히보기</Link>
                                        </div>
                                    </div>
                                    <span className='fileLoad'>
                                        <span>
                                            01) 치자이너가 의뢰인에게 전달 CAD파일.zip
                                            <em>328.36 mb</em>
                                        </span>
                                        <button className='bFD'>Download</button>
                                    </span>
                                </li>
                                <li>
                                    <div className='reQMinInfo'>
                                        <div className='left'>
                                            <span className='itemTag br4'><em>의뢰서 a</em></span>
                                            <strong>@8321430183048173057</strong>
                                            <p>크라운 15 / 어비트먼트 10</p>
                                        </div>
                                        <div className='right'>
                                            <strong className='time'>2024. 06. 30 <strong>18:30</strong></strong>
                                            <Link className='bMR' to='/requestView'>더 자세히보기</Link>
                                        </div>
                                    </div>
                                    <span className='fileLoad'>
                                        <span>
                                            01) 치자이너가 의뢰인에게 전달 CAD파일.zip
                                            <em>328.36 mb</em>
                                        </span>
                                        <button className='bFD'>Download</button>
                                    </span>
                                </li>
                                <li>
                                    <div className='reQMinInfo'>
                                        <div className='left'>
                                            <span className='itemTag br4'><em>의뢰서 a</em></span>
                                            <strong>@8321430183048173057</strong>
                                            <p>크라운 15 / 어비트먼트 10</p>
                                        </div>
                                        <div className='right'>
                                            <strong className='time'>2024. 06. 30 <strong>18:30</strong></strong>
                                            <Link className='bMR' to='/requestView'>더 자세히보기</Link>
                                        </div>
                                    </div>
                                    <span className='fileLoad'>
                                        <span>
                                            01) 치자이너가 의뢰인에게 전달 CAD파일.zip
                                            <em>328.36 mb</em>
                                        </span>
                                        <button className='bFD'>Download</button>
                                    </span>
                                </li>
                                <li>
                                    <div className='reQMinInfo'>
                                        <div className='left'>
                                            <span className='itemTag br4'><em>의뢰서 a</em></span>
                                            <strong>@8321430183048173057</strong>
                                            <p>크라운 15 / 어비트먼트 10</p>
                                        </div>
                                        <div className='right'>
                                            <strong className='time'>2024. 06. 30 <strong>18:30</strong></strong>
                                            <Link className='bMR' to='/requestView'>더 자세히보기</Link>
                                        </div>
                                    </div>
                                    <span className='fileLoad'>
                                        <span>
                                            01) 치자이너가 의뢰인에게 전달 CAD파일.zip
                                            <em>328.36 mb</em>
                                        </span>
                                        <button className='bFD'>Download</button>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='btnArea'>
                            <Link to='/reRequestWrite' className='btnW'>재제작 요청</Link>
                            <Link to='/reView' className='btnB'>리뷰작성</Link>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </>
  );
};

export default CADViewPage ;
