import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

const Layout = function (props) {
  const { children } = props;
  const funcRun = props.functionRun();
  return (
    <>
      <Header></Header>
      <Menu />
      {funcRun}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
