import { usePreviousPage } from "PreviousContext";
import { Link } from "react-router-dom";
import { getUserInfo } from "utils/store";

function DefaultFooter() {
  const userInfo = getUserInfo();
  const { navigateWithPrevious } = usePreviousPage();
  
  return (
    <div id="footer">
      <footer>
        <ul>
          <li className="nav1"><Link to={userInfo ? '/activity' : '/p/activity'} onClick={() => navigateWithPrevious(userInfo ? '/activity' : '/p/activity')}>발견하기</Link></li>
          <li className="nav2"><Link to="/" onClick={() => navigateWithPrevious('/')}>메인</Link></li>
          <li className="nav3"><Link to="/myPage" onClick={() => navigateWithPrevious('/myPage')}>마이서로</Link></li>
        </ul>
      </footer>
    </div>
  );
}

export default DefaultFooter;
