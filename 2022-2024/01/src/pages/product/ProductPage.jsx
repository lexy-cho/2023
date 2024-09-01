import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { BaseButton, BaseSelect } from '@components/common';
import DetailTabNav from './components/DetailTabNav';
import DetailInfo from './components/DetailInfo';
import DetailQna from './components/DetailQna';
import DetailReview from './components/DetailReview';
import sample01 from '@assets/images/sample/sample12.png';
import ChoiceAlert from '../../components/ui/modal/ChoiceAlert';
import {ModalAlertPresent} from '@components/common';

const ProductPage = () => {
  const [isModal, setIsModal] = useState(false);
  const scrollRef = useRef([]); // 배열 ref를 하나 생성한다.
  const productItems = [{ name: '알모네이쳐', value: 0 }, { name: '알모네이쳐 2', value: 1 }];

  return (
    <>
      <section>
        {/* 상품 비주얼 */}
        <div className='productWrap'>
          <div className='pMainImg'><span><img src={sample01} /></span></div>
          <div className='pBasicInfo'>
            <div className='naming'>
              <em>트리밍버드</em>
              <strong>
                자연주의 명품 펫푸드 알모네이쳐<br/>
                자연주의 명품 펫푸드 알모네이쳐
              </strong>
            </div>
            <div className='ratingBack'>
              <span className="ratingArea">
                <Rating  
                  allowFraction
                  initialValue={5}
                  size={14}
                  fillColor='#520774'
                  emptyColor='#DDDDDD'
                  readonly />
              </span>
              <em>40개 리뷰</em>
            </div>
            <div className='price'>
              <div>
                <em>42%</em>
                <del>34,800원</del>
              </div>
              <strong>19,800<span>원</span></strong>
            </div>
            <dl className='delivery'>
              <dt>배송</dt>
              <dd>
                <strong>해외배송</strong> 
                <span>일반택배</span>
                <div>
                  <em>옵션 3,000원</em>
                  <em>옵션 배송 불가</em>
                </div>
              </dd>
            </dl>
            <div className='choice'>
              <dl className='goReseller'>
                <dt><strong>트리밍버드</strong></dt>
                <dd><Link className='bRH' to='/reseller'>리셀러홈</Link></dd>
              </dl>
              <dl>
                <dt>상품선택</dt>
                <dd><BaseSelect items={productItems} placeholder={'상품을 선택해 주세요.'} onChange={(e) => console.log(e)} /></dd>
              </dl>
              <dl>
                <dt>주문금액</dt>
                <dd>0원</dd>
              </dl>
            </div>
            <div className='btn'>
              <span><input type='checkbox' className='likeSet' defaultChecked /></span>
              <Link className="btnB" to='/cart'>장바구니</Link>
              <BaseButton type="button" className="btnM" label={'바로구매'} onClick={() => setIsModal(true)} />
            </div>
          </div>
        </div>
        {/* end 상품 비주얼 */}
        <div className='inSubTabWrap'>
          <DetailTabNav scrollRef={scrollRef} />
          <div className='tabContents'>
            <DetailInfo ref={scrollRef} />
            <DetailQna ref={scrollRef} />
            <DetailReview ref={scrollRef} />
          </div>
        </div>
      </section>

      {isModal && 
          <ModalAlertPresent >
              <ChoiceAlert onClose={() => {setIsModal(false)}}/>
          </ModalAlertPresent>
      }
    </>
  );
};

export default ProductPage;
