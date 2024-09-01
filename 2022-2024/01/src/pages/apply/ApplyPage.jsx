import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BaseInput, BaseButton, BaseSelect, ImageSetting } from '@components/common';

const ApplyPage = ({onLayoutTitleChange}) => {
    const [infoVisible, setInfoVisible] = useState(false);
    const emailItems = [{ name: 'gmail.com', value: 0 }, { name: 'naver.com', value: 1 }];
    const phoneItems = [{ name: '010', value: 0 }, { name: '011', value: 1 }];
    const accountItems = [{ name: '국민은행', value: 0 }, { name: '카카오뱅크', value: 1 }];
    useEffect(() => {
        onLayoutTitleChange('리셀러 신청');
    });
  return (
    <>
      <section>
        <div className='applyWrapBack'>
          <div className='applyWrap'>
            <h2>
                리셀러 신청
                <span className='appyInfo'>
                    <button onClick={() => setInfoVisible(!infoVisible)}>Info</button>
                    <span style={{display: `${infoVisible ? 'block' : 'none'}`}}>
                        You can sell Korean product online.<br/>
                        Start your online business at home.<br/>
                        We source Korean product and help you sell online.<br/>
                        You can start your own business with us.
                    </span>
                </span>
            </h2>
            <article className='applyCase'>
                <div className='back'>
                    <h3>
                        리셀러 정보
                        <span className='appyInfo'>
                            <button className={`${infoVisible ? 'on' : ''}`} onClick={() => setInfoVisible(!infoVisible)}>Info</button>
                            <span style={{display: `${infoVisible ? 'block' : 'none'}`}}>
                                You can sell Korean product online.<br/>
                                Start your online business at home.<br/>
                                We source Korean product and help you sell online.<br/>
                                You can start your own business with us.
                            </span>
                        </span>
                    </h3>
                    <form>
                        <div className="tws">
                            <dl>
                                <dt>이름</dt>
                                <dd>
                                    <input type="text" placeholder="이름을 입력해 주세요." />
                                </dd>
                            </dl>
                            <dl>
                                <dt>이메일</dt>
                                <dd className='emailSet'>
                                    <BaseInput type="text" placeholder="이메일을 입력해 주세요." value={''} />
                                    <em>@</em>
                                    <BaseSelect items={emailItems} placeholder={'gmail.com'} onChange={(e) => console.log(e)} />
                                </dd>
                            </dl>
                            <dl>
                                <dt>연락처</dt>
                                <dd className='phoneSet'>
                                    <BaseSelect items={phoneItems} placeholder={'010'} onChange={(e) => console.log(e)} />
                                    <input type='text' />
                                </dd>
                            </dl>
                            <dl>
                                <dt>주소</dt>
                                <dd className='addressSet'>
                                    <span className='zip'>
                                        <button type='button' className='bIW'>주소찾기</button>
                                        <input type='text' disabled />
                                    </span>
                                    <p></p>
                                    <input type='text' placeholder='상세 주소를 입력해 주세요.' />
                                </dd>
                            </dl>
                            <dl>
                                <dt>계좌번호</dt>
                                <dd className='accountSet'>
                                    <BaseSelect items={accountItems} placeholder={'은행 선택'} onChange={(e) => console.log(e)} />
                                    <input type='text' />
                                    <em>USD 거래 가능한 계좌번호를 입력해 주세요</em>
                                </dd>
                            </dl>
                            <dl>
                                <dt>VAT</dt>
                                <dd className='accountSet'>
                                    <BaseSelect items={accountItems} placeholder={'은행 선택'} onChange={(e) => console.log(e)} />
                                    <input type='text' />
                                </dd>
                            </dl>
                        </div>
                        <div className='btnArea'>
                            <BaseButton type='submit' className={'btnB'} label={'관리자에게 문의하기'} />
                            {/* <BaseButton type='submit' className={'btnM'} label={'리셀러 신청하기'} /> */}
                            <Link className='btnM' to='/applyEnd'>리셀러 신청하기</Link>
                        </div>
                    </form>
                </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyPage;
