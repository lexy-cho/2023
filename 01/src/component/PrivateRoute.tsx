import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getAccessToken } from 'utils/store';

export interface PrivateRouteProp {
    children?: any;
    nonAuthentication?: boolean;
    path?: any;
    singlePage?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProp> = ({ children, nonAuthentication, path, singlePage }) => {
    const { id } = useParams();
    
    // const Board: React.FC<BoardProps> = ({ data }) => {
    const isAuthenticated = getAccessToken() || nonAuthentication; //토큰 존재 여부로 인증 확인
    // console.log("isAuthenticated=========>", isAuthenticated, "path=======>", path, "nonAuthentication-=======>", nonAuthentication);
    if (singlePage) {
        document.getElementById("root")?.classList.add('pinkPage');
    } else {
        document.getElementById("root")?.classList.remove('pinkPage')
    }
    
    if (!isAuthenticated) {
        /* 발견하기 진입(권한이 없을경우)  */
        if(path.indexOf('/activity') === 0) {
            return id ?  <Navigate to={`/p/activity/${id}`} replace={true}/> : <Navigate to="/p/activity" replace={true}/>;
        }

        return <Navigate to="/login" replace={true}/>;
    }
    return children;
}

export default PrivateRoute;
