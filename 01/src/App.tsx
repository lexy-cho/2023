import { UserProvider } from 'UserContext';
import PrivateRoute from 'component/PrivateRoute';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import routes from 'routes';
import { PreviousPageProvider } from './PreviousContext';
import { ThemeProvider } from './ThemeContext';
import { getTheme } from 'utils/store';
import React from 'react';

// import { createBrowserHistory } from "history";
// export const history = createBrowserHistory();

const Login = React.lazy(() => import("pages/Login"));

function App() {
    /* 다크모드인지 여부 */
    getTheme() ? document.querySelector("body")?.classList.add('dark') : document.querySelector("body")?.classList.remove('dark');

    return (
        <UserProvider>
            <ThemeProvider>
                <ToastContainer position="bottom-center" pauseOnFocusLoss draggable pauseOnHover />
                <Router>
                    <PreviousPageProvider>
                        {/* <AxiosInterceptor> */}
                        {/* <Suspense> */}
                        <Routes>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            element={<PrivateRoute path={route.path} nonAuthentication={route.nonAuthentication} singlePage={route?.singlePage}><route.layout name={route.name}><route.component /></route.layout></PrivateRoute>}
                                        />
                                    )
                                )
                            })}
                            {/* <Route path="/login" element={<Login />} /> */}
                        </Routes>
                        {/* </Suspense> */}
                        {/* </AxiosInterceptor> */}
                    </PreviousPageProvider>
                </Router>

            </ThemeProvider>
        </UserProvider>
    )
}

export default App;