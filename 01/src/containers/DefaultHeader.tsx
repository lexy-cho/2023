import { useMutation } from '@tanstack/react-query';
import { usePreviousPage } from 'PreviousContext';
import { useUserDispatch, useUserState } from "UserContext";
import share from 'component/Share';
import { Link, useNavigate } from 'react-router-dom';
import settingApi from 'utils/api/settingApi';
import { convActStat } from 'utils/conversion';
import { formatDate } from 'utils/format';
import { getUserInfo, setUserInfo } from 'utils/store';
import { useTheme } from '../ThemeContext';


interface HeadBtnsProps {
  headType?: string;
  title?: string;
  act?: any;
  state?: any;
}


export const HeadBtns = ({ headType, title, act, state }: HeadBtnsProps) => {
  const navigate = useNavigate();
  const { currentPath, previousPage, navigateWithPrevious } = usePreviousPage();
  const handlePrevBtn = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    // console.log(previousPage, currentPath);
    navigate(-1);
    // if(previousPage?.path === '/activity' && currentPath !== '/activity') {      
    //   navigate('/activity', {state:state, replace:true});
    //   navigateWithPrevious('/activity');
    // }else {
    //   navigate(-1);
    // }
    // navigate(-1);
  }

  return (
    <>
      {headType === 'main' && <img className="header-logo" src={`${process.env.PUBLIC_URL}/assets/images/ic_logo_pink.svg`} onClick={() => {navigate('/'); navigateWithPrevious('/');}} />}
      {headType === 'alert' && <Link className="prevBtn" to="#" onClick={handlePrevBtn}>이전</Link>}
      {headType === 'sub' &&
        <span className="hleft">
          <Link className="prevBtn" to="#" onClick={handlePrevBtn}>이전</Link>
          <h1>{title}</h1>
        </span>
      }
      {act &&
        <span className="hleft">
          <Link className="prevBtn" to={'#'} onClick={handlePrevBtn}>이전</Link>
          {/* <button className="prevBtn" onClick={handlePrevBtn}>이전</button> */}
          <h1>
            <strong>{act?.actName}</strong>
            <span>{formatDate(act.regDate, 'YYYY.MM.DD')} <em className="icS">{convActStat(act.actStat)}</em></span>
          </h1>
        </span>
      }
    </>
  )
}

interface TailBtnsProps {
  tailType?: string;
  act?: any;
  tailEvent?: () => void;
}
export const TailBtns = ({ tailType, act, tailEvent }: TailBtnsProps) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const userInfo = getUserInfo()
  const { user } = useUserState();
  const dispatch = useUserDispatch(); //23.11.5 로그인 시 context에 추가
  const { navigateWithPrevious } = usePreviousPage();

  const handleNotiStat = () => {
    navigateWithPrevious('/notice');
    if (user?.notiCount) notiStat({ memUid: user?.memUid });
  }

  const { mutate: notiStat } = useMutation(settingApi.notiStat, {
    onError: (error, variable, context) => {
      console.log("error", error, variable, context);
    },
    onSuccess: ({ statusCode, data }: any, variables, context) => {
      if (statusCode === 200) {
        dispatch({ type: 'LOGIN', user: { notiCount: 0 } }); //23.11.5 로그인 시 context에 추가
        setUserInfo({ ...userInfo, notiCount: 0 });
      }
    },
  });

  const handleShare = async () => {
    const dataToShare = {
      title: `[서로 플랫폼]`,
      text: `${act?.actName}`,
      url: `${window.location.href}`,
    };

    const result = await share(dataToShare);
    if (result === "copiedToClipboard") {
      alert("링크를 클립보드에 복사했습니다.");
    } else if (result === "failed") {
      alert("공유하기가 지원되지 않는 환경입니다.");
    }
  };


  return (
    <>
      {tailType === 'all' &&
        <span className="hright">
          <Link to={'#'} className={!darkMode ? 'mode' : 'mode dark'} onClick={toggleDarkMode}>{!darkMode ? '일반모드로 변경' : '다크모드로 변경'}</Link>
          {/** 알림 카운트 추가 */}
          {userInfo && <Link to={'/notice'} className="arlim" onClick={handleNotiStat}>알림{user?.notiCount ? <i>{user?.notiCount}</i> : ''}</Link>}
          <Link className="moreSnb" to={'/more'} onClick={() => navigateWithPrevious('/more')}>더보기 </Link>
        </span>
      }
      {tailType === 'alert' &&
        <span className="hright">
          <Link className="moreSnb" to={'/more'} onClick={() => navigateWithPrevious('/more')}>더보기 </Link>
        </span>
      }
      {(act && tailEvent) &&
        <span className="hright">
          <Link to={'#'} onClick={tailEvent} className={act?.isLike ? 'like on' : 'like'}>좋아요</Link>
          <Link to={'#'} onClick={handleShare} className='share'>활동 공유하기</Link>
        </span>
      }
    </>
  )
}

interface HeaderProps {
  title?: string;
  headType?: string;
  tailType?: string;
  act?: object;
  state?: any;
  tailEvent?: () => void;
}

function DefaultHeader({ title, headType, tailType, act, state, tailEvent }: HeaderProps) {
  // const pathname = useLocation().pathname.replace('/', '');
  // console.log(title, headType, tailType)
  // const { darkMode, toggleDarkMode } = useTheme();
  // const { user } = useUserState();
  // console.log("Theme Context darkMode =====> ", darkMode)
  // const navigate = useNavigate();

  return (
    <div id="header">
      <header>
        <div className={act ? `back detailTit` : `back`}>
          <HeadBtns title={title} headType={headType} act={act} state={state}/>
          <TailBtns tailType={tailType} act={act} tailEvent={tailEvent} />
        </div>
      </header>
    </div>
  );

}

export default DefaultHeader;
