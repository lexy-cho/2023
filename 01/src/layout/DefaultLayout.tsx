import React from 'react';
import DefaultHeader from 'containers/DefaultHeader';
import DefaultContent from 'containers/DefaultContent';
import DefaultFooter from 'containers/DefaultFooter';

interface LayoutProps {
  children: React.ReactNode;
  tkn?: string | null
  name? : string;
}

interface ContentProps {
  children: React.ReactNode;
  tkn?: string | null
}

interface HeaderProps {
  name? : string;
}

const Header: React.FC<HeaderProps> = () => {
  return <DefaultHeader/>;
};

const Content: React.FC<ContentProps> = ({children}) => {
  return <DefaultContent >{children}</DefaultContent>
};

const Footer: React.FC = () => {
  return <DefaultFooter />;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children, tkn}) => {
  // console.log("DefaultLayout=====>")
  return (  
    //TODO: className, 
    <div className="layout">
      {/* <Loading /> */}
      {/* <Header></Header> */}
      <Content>{children}</Content>
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
