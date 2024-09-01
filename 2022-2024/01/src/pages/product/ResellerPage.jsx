import React, { useRef } from 'react';
import ResellerTabNav from './components/ResellerTabNav';
import ResellerList from './components/ResellerList';
import DetailQna from './components/DetailQna';
import DetailReview from './components/DetailReview';
import sample01 from '@assets/images/sample/sample10.png';
import sample02 from '@assets/images/sample/sample11.png';

const ResellerPage = () => {
    const scrollRef = useRef([]); // 배열 ref를 하나 생성한다.
  return (
    <>
      <section className='mainCase'>
        {/* 리셀러 홈 비주얼 */}
        <div className='resellerVisual'>
            <div className="rvBack">
              <span className="profileImg"><img src={sample01} /></span>
              <div>
                <strong>홍길동</strong>
                <p>
                중앙선거관리위원회는 대통령이 임명하는 3인, 국회에서 선출하는 3인과 대법원장이 지명하는 3인의 위원으로 구성한다. 위원장은 위원중에서 호선한다.<br/>
                중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 법률에 저촉되지 아니하는 범위안에서 내부규율에 관한 규칙을 제정할 수 있다.
                </p>
              </div>
            </div>
            <div className='backimg'>
              <img src={sample02} />
            </div>
        </div>
        {/* end 리셀러 홈 비주얼 */}
        <div className='inSubTabWrap'>
          <ResellerTabNav scrollRef={scrollRef} />
          <div className='tabContents'>
            <ResellerList ref={scrollRef} />
            <DetailQna ref={scrollRef} />
            <DetailReview ref={scrollRef} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ResellerPage;
