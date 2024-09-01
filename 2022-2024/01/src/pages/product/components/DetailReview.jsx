import React, { forwardRef, useState } from "react";
import { Pagenation, SortingSelect } from '@components/common';
import { Rating } from 'react-simple-star-rating';
import sample01 from '@assets/images/sample/sample10.png';
import sample02 from '@assets/images/sample/sample2.png';

const DetailReview = forwardRef((props, ref) => {
  const produtItems = [{ name: '최신순', value: 0 }, { name: '별점순', value: 1 }];
  // const [ratingValue, setRating] = useState(0);
  // const handleRating = (rate) => {
  //   setRating(rate);
  // }
  // const handleReset = () => {
  //   setRating(0);
  // }

    return (
      <article ref={reviewRef => (ref.current[2] = reviewRef)}>
        <div className="back reviewCase">
          <div className='listTit'>
            <h3>구매 리뷰</h3>
            <SortingSelect items={produtItems} placeholder={'최신순'} onChange={(e) => console.log(e)} />
          </div>
          {/*  */}
          <p className="reviewGuide">모든 리뷰는 <strong>100% 구매사실이 확인된 리뷰</strong>입니다</p>
          <div className="reviewList">
            <ul>
              <li>
                <span className="writeUser">
                  <span className="profileImg"><img src={sample01} /></span>
                  <span className="nick">
                    <strong>홍길동</strong>
                    <span className="ratingArea">
                      <Rating  
                        allowFraction
                        initialValue={3.5}
                        onClick={function noRefCheck(){}}
                        size={16}
                        fillColor='#520774'
                        emptyColor='#DDDDDD'
                        readonly />
                      <em>2024.04.19</em>
                    </span>
                  </span>
                </span>
                <div className="img">
                  <ol>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                    <li><img src={sample02} /></li>
                  </ol>
                </div>
                <p className="txt">
                  모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 모든 국민은 인간다운 생활을 할 권리를 가진다. 법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 모든 국민은 인간다운 생활을 할 권리를 가진다.
                  법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.
                </p>
              </li>
              <li>
                <span className="writeUser">
                  <span className="profileImg"></span>
                  <span className="nick">
                    <strong>홍길동</strong>
                    <span className="ratingArea">
                      <Rating  
                        allowFraction
                        initialValue={3.5}
                        onClick={function noRefCheck(){}}
                        size={16}
                        fillColor='#520774'
                        emptyColor='#DDDDDD'
                        readonly />
                      <em>2024.04.19</em>
                    </span>
                  </span>
                </span>
                <p className="txt">
                  모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 모든 국민은 인간다운 생활을 할 권리를 가진다. 법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 모든 국민은 인간다운 생활을 할 권리를 가진다.
                  법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.
                </p>
              </li>
              <li>
                <span className="writeUser">
                  <span className="profileImg"></span>
                  <span className="nick">
                    <strong>홍길동</strong>
                    <span className="ratingArea">
                      <Rating  
                        allowFraction
                        initialValue={3.5}
                        onClick={function noRefCheck(){}}
                        size={16}
                        fillColor='#520774'
                        emptyColor='#DDDDDD'
                        readonly />
                      <em>2024.04.19</em>
                    </span>
                  </span>
                </span>
                <p className="txt">
                  abcdefghijklmnopqrstuvwxyz 
                </p>
              </li>
            </ul>
          </div>
          {/*  */}
          <Pagenation />
        </div>
      </article>
    );
  });

export default DetailReview;