import { useNavigate } from "react-router-dom";

function Content() {
    const navigate = useNavigate();
    
    return (
        <div id="container">
            <section>
                컨텐츠 영역(Content.tsx)
                (뒤로가기가 있고 푸터가 없는 페이지에서 사용예정)
                <button onClick={() => navigate(`/login`)}>싱글 레이아웃 이동</button>
            </section>
        </div>
    );
}

export default Content;
