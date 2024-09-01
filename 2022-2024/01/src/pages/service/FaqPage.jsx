import React from 'react';
import { Pagenation } from '@components/common';

const FaqPage = () => {
  return (
    <>
      <article>
        <h2>FAQ</h2>
        <div className='faqSorting'>
          <span>
            <input type='radio' name='faqS' id='faqS1' defaultChecked />
            <label htmlFor='faqS1'>전체</label>
          </span>
          <span>
            <input type='radio' name='faqS' id='faqS2'/>
            <label htmlFor='faqS2'>가입</label>
          </span>
          <span>
            <input type='radio' name='faqS' id='faqS3'/>
            <label htmlFor='faqS3'>리셀러 문의</label>
          </span>
          <span>
            <input type='radio' name='faqS' id='faqS4'/>
            <label htmlFor='faqS4'>취소/교환/반품</label>
          </span>
          <span>
            <input type='radio' name='faqS' id='faqS5'/>
            <label htmlFor='faqS5'>배송 문의</label>
          </span>
          <span>
            <input type='radio' name='faqS' id='faqS6'/>
            <label htmlFor='faqS6'>주문결제</label>
          </span>
        </div>
        <div className="faqls">
          {/* Loop */}
          <dl>
            <dt>
              주문 내역은 어떻게 확인할 수 있나요?
            </dt>
            <dd>
              등록된 답변 내용이 노출됩니다
            </dd>
          </dl>
          {/* end Loop */}
          <dl className='on'>
              <dt>
                주문 내역은 어떻게 확인할 수 있나요?
              </dt>
              <dd>
                우측 상단 프로필 사진 클릭 후 [나의쇼핑]을 통해 확인 가능합니다. 우측 상단 프로필 사진 클릭 후 [나의쇼핑]을 통해 확인 가능합니다. 우측 상단 프로필 사진 클릭 후 [나의쇼핑]을 통해 확인 가능합니다.  우측 상단 프로필 사진 클릭 후 [나의쇼핑]을 통해 확인 가능합니다.
              </dd>
          </dl>
          <dl>
              <dt>
                주문 내역은 어떻게 확인할 수 있나요?
              </dt>
              <dd>
              등록된 답변 내용이 노출됩니다
              </dd>
          </dl>
        </div>
        <Pagenation />
      </article>
    </>
  );
};

export default FaqPage;
