import React, { ReactElement } from 'react';

import cls from './header.module.scss';
import img_logo from '../assets/img/logo.png';

function Header(): ReactElement {
  return (
    <header className={cls.header}>
      <h1 className={cls.title}>
        <img src={img_logo} alt="LogoIcon" /> Trello Clone
      </h1>
    </header>
  );
}

export default Header;
