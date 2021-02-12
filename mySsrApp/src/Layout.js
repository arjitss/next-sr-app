import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

const Layout = function (props) {
  const { children } = props;
  return (
    <>
      <Header></Header>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
