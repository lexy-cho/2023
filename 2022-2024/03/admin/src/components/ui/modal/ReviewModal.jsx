import React from "react";

const ReviewModal = ({onClose}) => {

    return (
        <div className="basicPop reviewPop" id="reviewPop" style={{display:'block'}}>
            <button className="btnPClose" id="reviewPopClose1" onClick={() => onClose()}>닫기</button>
            <div className="pBack">
                <span className="scroe"><i className="full"></i><i className="full"></i><i className="full"></i><i className="half"></i><i></i></span>
                <em>ho***n</em>
                <div className="tt">"<strong>올해 최고의 힐링</strong>"</div>
                <div className="data">저는 최근에 5성급 호텔에서 훌륭한 숙박 경험을 했습니다. 먼저 호텔의 위치는 도시의 중심가에 있 어서 관광 명소나 레스토랑 등을 쉽게 이용할 수 있었습니다. 호텔 입구부터 직원들의 친절한 서비 스가 인상적이었는데, 체크인부터 체크아웃까지 항상 웃는 얼굴로 저를 반겨주어 편안한 느낌을 받 았습니다. 객실은 넓고 깨끗했으며, 모던한 디자인과 편안한 침구가 마음에 들었습니다. 특히 침대의 퀄리티가 뛰어나서 피로를 푸는 데에 도움이 되었습니다. 욕실도 넓고 세련되었으며, 고급스러운 욕조와 샤워 시설이 제공되어 편안한 목욕을 즐길 수 있었습니다. 호텔의 시설은 매우 다양하고 풍부했습니다. 특히 피트니스 센터와 스파는 최고 수준의 시설과 서비 스를 제공하여 휴식과 휴식을 동시에 즐길 수 있었습니다. 레스토랑과 바도 다양한 메뉴와 음료를 제공하여 매일매일 새로운 맛을 경험할 수 있었습니다. 또한 호텔의 안전 및 청결에 대한 관리가 철저하게 이루어졌다는 점도 감명깊었습니다. 코로나19로 인한 걱정이 있었지만, 호텔은 철저한 방역과 소독 절차를 통해 안전을 보장해 주었습니다. 마지막으로, 호텔 직원들의 서비스는 정말 훌륭했습니다. 어떤 요청에도 신속하고 친절하게 대응해 주었고, 항상 손님의 만족을 위해 노력하는 모습이 보였습니다. 전체적으로, 이 호텔에서의 숙박은 제가 기대한 것보다 훨씬 좋았고, 다음에 또 방문하고 싶은 곳입 니다. 호텔의 모든 직원들에게 감사의 말씀을 전하고 싶습니다.
                </div>
                <span className="date">2023.12.31에 작성</span>
            </div>
        </div>
    )
}

export default ReviewModal;