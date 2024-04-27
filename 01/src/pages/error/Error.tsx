import { Link } from 'react-router-dom';

function Error(error: any) {

    return (
        <div className="errorPage memberCase">
            <h1>서로 플랫폼</h1>
            <div>{error.responseMessage||`잠시 후에 다시 시도해주시기 바랍니다.`}</div>
            <Link to="/" className="btnG">메인으로</Link>
        </div>
    )
}

export default Error