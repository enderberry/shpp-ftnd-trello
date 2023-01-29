import React, { ReactElement } from 'react';

import cls from './header.module.scss';
import img_logo from '../assets/img/logo.png';

function Header(): ReactElement {
  return (
    <header className={cls.header}>
      <p className={cls.title}>
        <img src={img_logo} alt="LogoIcon" /> Trello Clone
      </p>
    </header>
  );
}

export default Header;
