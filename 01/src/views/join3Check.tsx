import { useNavigate } from "react-router-dom";

function Join() {
    const navigate = useNavigate();

    return (
        <div id="container" className="memberCase">
            <section>
                <h1>회원 업그레이드</h1>
                <div className="mmUpgrade">
                    <p>
                        <strong>업그레이드 하시겠어요?</strong>
                        기존의 유미나인드랩 서로서비스에 참여하셨다면 회원 업그레이드를 통해 더 많은 서비스를 이용할 수 있습니다.
                    </p>
                    <a href="/#/join4" className="btnL">업그레이드하기</a>
                    <a href="/#/join3" className="btnG">취소</a>
                </div>
            </section>
        </div>
    );
}

export default Join;
