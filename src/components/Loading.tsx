import React, { ReactElement } from 'react';

import LoadingIndicator from './UI/LoadingIndicator';
import cls from './loading.module.scss';

function Loading(): ReactElement {
  return (
    <div className={cls.wrapper}>
      <div className={cls.loading}>
        <div>
          <LoadingIndicator />
        </div>
        <p className={cls.l_text}>Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
