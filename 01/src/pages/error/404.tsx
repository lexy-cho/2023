import { Link } from 'react-router-dom';

function Error_404(error: any) {

    return (
        <div className="errorPage memberCase">
            <h1>서로 플랫폼</h1>
            <div>해당 페이지를 <br /> 찾을 수 없습니다.</div>
            <Link to="/" className="btnG">메인으로</Link>
        </div>
    )
}

export default Error_404;