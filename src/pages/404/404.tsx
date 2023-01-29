import React, { ReactElement } from 'react';

import Header from '../../components/Header';
import cls from './not-found.module.scss';

function NotFound(): ReactElement {
  return (
    <div className={cls.not_found}>
      <div className="container">
        <Header />
        <section className="section">
          <h1 className={cls.title}>404 Not Found</h1>
          <p className={cls.description}>
            The page you requested is not found on the website or it may be private.
            <br />
            Please, check your request URL or switch accounts.
          </p>
        </section>
      </div>
    </div>
  );
}

export default NotFound;
