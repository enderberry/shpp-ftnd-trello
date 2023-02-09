import React, { ReactElement, useState, useEffect } from 'react';

import Modal from './UI/Modal';
import cls from './error_msg.module.scss';

function ErrorMsg(): ReactElement {
  const [opened, setOpened] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const errorCallback = (event: Event): void => {
      if (!('detail' in event)) return;
      setError(event.detail as Error);
      setOpened(true);
    };
    window.addEventListener('x-error', errorCallback);

    return () => window.removeEventListener('x-error', errorCallback);
  }, []);

  return (
    <Modal opened={opened} setOpened={setOpened} className={cls.modal}>
      <div className={cls.wrapper}>
        <p>
          <i className={`bi bi-x-octagon-fill ${cls.icon}`} />
        </p>
        <p className={cls.message}>{error?.message}</p>
      </div>
    </Modal>
  );
}

ErrorMsg.defaultProps = {
  error: undefined
};

export default ErrorMsg;
