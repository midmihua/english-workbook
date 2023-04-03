import { useState } from 'react';
import LoginForm from '../../forms/Login';
import Icons from './Icons';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  const [loginFormVisible, setLoginFormVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  const loginClickHandler = () => {
    setLoginFormVisible(true);
  };

  const loginFormClickHandler = () => {
    setLoginFormVisible(false);
  };

  const logoutClickHandler = () => {
    console.log('logoutClickHandler');
  };

  const menuClickHandler = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <header>
      <Logo />
      <Nav
        visible={navbarVisible}
      />
      <Icons
        onClickLogin={loginClickHandler}
        onClickLogout={logoutClickHandler}
        onClickMenu={menuClickHandler}
        closeIconVisible={navbarVisible}
      />
      <LoginForm
        visible={loginFormVisible}
        onClick={loginFormClickHandler}
      />
    </header>
  );
};

export default Header;
