import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BaseInput, BaseButton, BaseSelect, ImageSetting } from '@components/common';

const ApplyPage = ({onLayoutTitleChange}) => {
    const [infoVisible, setInfoVisible] = useState(false);
    const [aResult , setAResult] = useState(1);
    const handleAResult = (aResult) => {
        setAResult(aResult);
    }
    useEffect(() => {
        onLayoutTitleChange('리셀러 신청 내역');
    });
  return (
    <>
      <section>
        <div className='applyWrapBack'>
          <div className='applyWrap'>
            <h2>
                리셀러 신청 내역
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
            {aResult === 1 && 
            <article className='applyEndCase'>
                <div className='listTit ing'>
                    <strong>리셀러 승인 대기중입니다</strong>
                </div>
                <h3>리셀러 정보</h3>
                <div className='infoBack'>
                    <dl>
                        <dt>이름</dt>
                        <dd>홍길동</dd>
                    </dl>
                    <dl>
                        <dt>이메일</dt>
                        <dd>kd.hong@gmail.com</dd>
                    </dl>
                    <dl>
                        <dt>연락처</dt>
                        <dd>010-1234-5678</dd>
                    </dl>
                    <dl>
                        <dt>주소</dt>
                        <dd>(12345) 서울특별시 영등포구 선유로 3길 9</dd>
                    </dl>
                    <dl>
                        <dt>계좌번호</dt>
                        <dd>신한은행 123456789</dd>
                    </dl>
                    <dl>
                        <dt>VAT</dt>
                        <dd>힌국 12345</dd>
                    </dl>
                </div>
                <div className='btnArea'>
                    <BaseButton type='button' className={'btnB'} label={'관리자에게 문의하기'} />
                    <BaseButton type='button' className={'btnBL'} label={'신청 취소하기'}  onClick={() => handleAResult(2)} />
                </div>
            </article>
            }
            {aResult === 2 && 
            <article className='applyEndCase'>
                <div className='listTit fail'>
                    <strong>리셀러 신청이 반려되었습니다</strong>
                    <p>
                        We were unable to verify the information you provided when registering for a Reselling on The Ippo.<br/>
                        Please try again and if you still need any help, let us know by e-mail.
                    </p>
                </div>
                <h3>리셀러 정보</h3>
                <div className='infoBack'>
                    <dl>
                        <dt>이름</dt>
                        <dd>홍길동</dd>
                    </dl>
                    <dl>
                        <dt>이메일</dt>
                        <dd>kd.hong@gmail.com</dd>
                    </dl>
                    <dl>
                        <dt>연락처</dt>
                        <dd>010-1234-5678</dd>
                    </dl>
                    <dl>
                        <dt>주소</dt>
                        <dd>(12345) 서울특별시 영등포구 선유로 3길 9</dd>
                    </dl>
                    <dl>
                        <dt>계좌번호</dt>
                        <dd>신한은행 123456789</dd>
                    </dl>
                    <dl>
                        <dt>VAT</dt>
                        <dd>힌국 12345</dd>
                    </dl>
                </div>
                <div className='btnArea'>
                    <BaseButton type='button' className={'btnB'} label={'관리자에게 문의하기'} />
                    {/* <Link className='btnM' to='/apply'>다시 신청하기</Link> */}
                    <BaseButton type='button' className={'btnM'} label={'다시 신청하기'}  onClick={() => handleAResult(3)} />
                </div>
            </article>
            }
            {aResult === 3 && 
            <article className='applyEndCase'>
                <div className='listTit'>
                    <strong>리셀러 신청이 승인되었습니다</strong>
                    <p>리셀러 계정으로 전환해 주세요.</p>
                </div>
                <h3>리셀러 정보</h3>
                <div className='infoBack'>
                    <dl>
                        <dt>이름</dt>
                        <dd>홍길동</dd>
                    </dl>
                    <dl>
                        <dt>이메일</dt>
                        <dd>kd.hong@gmail.com</dd>
                    </dl>
                    <dl>
                        <dt>연락처</dt>
                        <dd>010-1234-5678</dd>
                    </dl>
                    <dl>
                        <dt>주소</dt>
                        <dd>(12345) 서울특별시 영등포구 선유로 3길 9</dd>
                    </dl>
                    <dl>
                        <dt>계좌번호</dt>
                        <dd>신한은행 123456789</dd>
                    </dl>
                    <dl>
                        <dt>VAT</dt>
                        <dd>힌국 12345</dd>
                    </dl>
                </div>
                <div className='btnArea long'>
                    <BaseButton type='button' className={'btnM'} label={'리셀러 계정 전환하기'}  onClick={() => handleAResult(1)} />
                    <div>
                        <BaseButton type='button' className={'btnB'} label={'관리자에게 문의하기'} />
                        <Link className='btnBL' to='/apply'>다시 신청하기</Link>
                    </div>
                </div>
            </article>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyPage;
