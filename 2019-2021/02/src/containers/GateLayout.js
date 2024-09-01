import React, { Suspense, useEffect, useState, useContext } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import routes from '../routes/routes';

import GateFooter from './GateFooter';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const GateLayout = () => {
  return (
    <div className="app">

      <div className="app-body">
        <Switch>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                  <route.component {...props} />
                )} />
            ) : (null);
          })}
        </Switch>
      </div>

      <GateFooter/>

    </div>
  )
}

export default GateLayout;
