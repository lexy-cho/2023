import React, { Component, useEffect, useLayoutEffect } from 'react'; 
import { useLocation } from 'react-router-dom';
import { withRouter } from 'react-router'

const ScrollToTop = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {        
    window.scrollTo(0,0);
  }, [pathname]);      

  return props.children;
  
}

export default ScrollToTop;