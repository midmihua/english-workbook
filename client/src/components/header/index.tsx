import { useState } from 'react';
import LoginForm from '../forms/loginForm';
import Icons from './icons';
import Logo from './logo';
import Nav from './nav';

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
